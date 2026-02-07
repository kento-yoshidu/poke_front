import { useEffect, useState } from "react";
import List from "./_components/List";
import type { DistributedPokemon, Pokemon, PokemonSpecies } from "./types/type";

function App() {
  const [list, setList] = useState<Pokemon[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/data.json").then(r => r.json()),
      fetch("/spec.json").then(r => r.json())
    ]).then(([distributed, species]: [
      DistributedPokemon[],
      Record<string, PokemonSpecies>
    ]) => {
      const merged: Pokemon[] = distributed.map(d => {
        const s = species[d.speciesNum];

        return {
          id: d.id,
          name: s.name,
          image: s.image,
          types: s.types,
          baseStats: s.baseStats,
          ivs: d.stats,
        };
      });

      setList(merged);
    });
  }, []);

  return (
    <main>
      {/* このあたりに検索UIを置く */}
      <List data={list} />
    </main>
  );
}

export default App
