import { useEffect, useState } from "react";
import List from "./_components/List";
import type { DistributedPokemon, Pokemon, PokemonSpecies } from "./types/type";
import "./App.css";
import styles from "./app.module.css";
import Footer from "./_components/Footer";
import Technology from "./_components/Technology";
import Header from "./_components/Header";

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
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        {/* このあたりに検索UIを置く */}
        <List data={list} />

        <Technology />
      </main>

      <Footer />
    </div>
  );
}

export default App
