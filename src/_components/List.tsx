import { useState } from "react";
import type { Pokemon } from "../types/type";
import Poke from "./Poke";

type Props = {
  data: Pokemon[];
};

type StatsMode = "base" | "iv";

export default function List({ data }: Props) {
  const [mode, setMode] = useState<StatsMode>("base");

  return (
    <>
      {/* 切り替えUI */}
      <div style={{ marginBottom: 8 }}>
        <button onClick={() => setMode("base")}>
          種族値
        </button>
        <button onClick={() => setMode("iv")}>
          個体値
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>画像</th>
            <th>タイプ</th>
            <th>H</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>S</th>
            {mode === "base" && <th>種族値合計</th>}
          </tr>
        </thead>
        <tbody>
          {data.map(pokemon => (
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
