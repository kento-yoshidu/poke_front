import { TYPE_LABEL } from "../data/typeMap";
import type { Pokemon } from "../types/type";

type StatsMode = "base" | "iv";

type Props = {
  pokemon: Pokemon;
  mode: StatsMode;
};

export default function Poke({ pokemon, mode }: Props) {
  return (
    <tr>
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td>
        <img src={pokemon.image} width={70} height={70} />
      </td>
      <td>
        {pokemon.types.map(type => (
          <span key={type}>{TYPE_LABEL[type]} </span>
        ))}
      </td>

      {mode === "base" ? (
        <>
          <td>{pokemon.baseStats.h}</td>
          <td>{pokemon.baseStats.a}</td>
          <td>{pokemon.baseStats.b}</td>
          <td>{pokemon.baseStats.c}</td>
          <td>{pokemon.baseStats.d}</td>
          <td>{pokemon.baseStats.s}</td>
          <td>{pokemon.baseStats.total}</td>
        </>
      ) : (
        <>
          <td>{pokemon.ivs.h.value} { pokemon.ivs.h.trained && <span>👑</span> }</td>
          <td>{pokemon.ivs.h.value} { pokemon.ivs.a.trained && <span>👑</span> }</td>
          <td>{pokemon.ivs.h.value} { pokemon.ivs.b.trained && <span>👑</span> }</td>
          <td>{pokemon.ivs.h.value} { pokemon.ivs.c.trained && <span>👑</span> }</td>
          <td>{pokemon.ivs.h.value} { pokemon.ivs.d.trained && <span>👑</span> }</td>
          <td>{pokemon.ivs.h.value} { pokemon.ivs.s.trained && <span>👑</span> }</td>
        </>
      )}
    </tr>
  );
}
