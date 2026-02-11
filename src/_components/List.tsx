import { useState } from "react";
import type { Pokemon } from "../types/type";
import styles from "./list.module.css";
import Poke from "./Poke";

type Props = {
  data: Pokemon[];
};

type StatsMode = "base" | "iv";

export default function List({ data }: Props) {
  const [mode, setMode] = useState<StatsMode>("base");

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th rowSpan={2}>No.</th>
            <th rowSpan={2}>名前</th>
            <th rowSpan={2}>画像</th>
            <th rowSpan={2}>タイプ</th>
            <th rowSpan={2}>とくせい</th>
            <th colSpan={6} className={styles.statsHeader}>
              <div className={styles.statsHeaderInner}>
                <div className={styles.modeSwitch}>
                  {mode === "base" ? (
                    <button onClick={() => setMode("iv")}>個体値</button>
                  ) : (
                    <button onClick={() => setMode("base")}>種族値</button>
                  )}
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th>H</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pokemon) => (
            <Poke
              key={pokemon.id}
              pokemon={pokemon}
              mode={mode}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
