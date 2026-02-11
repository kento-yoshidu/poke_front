// 種族値
export type BaseStats = {
  h: number;
  a: number;
  b: number;
  c: number;
  d: number;
  s: number;
  // total: number;
};

// 個体値
export type IVStats = {
  h: Value;
  a: Value;
  b: Value;
  c: Value;
  d: Value;
  s: Value;
};

export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

type Value = {
  value: number;
  trained: boolean;
};

type Ability = {
  name: string;
  isHidden: boolean;
}

export type DistributedPokemon = {
  id: number;
  speciesNum: number;
  ability: Ability;
  isShiny: boolean;
  stats: {
    h: Value;
    a: Value;
    b: Value;
    c: Value;
    d: Value;
    s: Value;
  };
};

// メタ情報
export type PokemonSpecies = {
  num: number;
  name: string;
  types: PokemonType[];
  baseStats: BaseStats,
  image: string;
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  ability: Ability;
  isShiny: boolean;
  types: PokemonType[];
  baseStats: BaseStats;
  ivs: IVStats;
};
