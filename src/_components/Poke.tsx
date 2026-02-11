import { TYPE_LABEL } from "../data/typeMap";
import type { Pokemon } from "../types/type";
import styles from "./list.module.css";

type StatsMode = "base" | "iv";

type Props = {
  pokemon: Pokemon;
  mode: StatsMode;
};

const iv = (iv: { value: number; trained: boolean }) => (
  <td className={`${styles.fixTd} ${iv.value === 31 ? styles.v : undefined}`}>
    {iv.value}
    {iv.trained && <span>👑</span>}
  </td>
);

function abilityLabel(ability: { name: string; isHidden: boolean }) {
  return ability.isHidden
    ? `${ability.name} 💤`
    : ability.name;
}

function pokemonImage(pokemon: Pokemon) {
  if (pokemon.isShiny) {
    return pokemon.image.replace(
      "/sprites/pokemon/",
      "/sprites/pokemon/shiny/"
    );
  }

  return pokemon.image;
}
export default function Poke({ pokemon, mode }: Props) {
  return (
    <tr>
      <td className={styles.no}>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td className={styles.image}>
        <img src={pokemonImage(pokemon)} width={70} height={70} />
      </td>
      <td>{abilityLabel(pokemon.ability)}</td>
      <td>
        {pokemon.types.map(type => (
          <p key={type}>{TYPE_LABEL[type]} </p>
        ))}
      </td>

      {mode === "base" ? (
        <>
          <td className={styles.fixTd}>{pokemon.baseStats.h}</td>
          <td className={styles.fixTd}>{pokemon.baseStats.a}</td>
          <td className={styles.fixTd}>{pokemon.baseStats.b}</td>
          <td className={styles.fixTd}>{pokemon.baseStats.c}</td>
          <td className={styles.fixTd}>{pokemon.baseStats.d}</td>
          <td className={styles.fixTd}>{pokemon.baseStats.s}</td>
        </>
      ) : (
        <>
          {iv(pokemon.ivs.h)}
          {iv(pokemon.ivs.a)}
          {iv(pokemon.ivs.b)}
          {iv(pokemon.ivs.c)}
          {iv(pokemon.ivs.d)}
          {iv(pokemon.ivs.s)}
        </>
      )}
    </tr>
  );
}
