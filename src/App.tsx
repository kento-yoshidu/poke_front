import { useEffect, useState } from "react";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};


function App() {
  const [list, setList] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(setList);
  }, []);

  return (
    <main>
      <h1>配布ポケモン一覧</h1>
      <ul>
        {list.map(p => (
          <li key={p.id}>
            <img src={p.image} alt="" />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App
