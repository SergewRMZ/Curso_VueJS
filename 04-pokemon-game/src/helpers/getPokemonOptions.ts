import pokemonApi from "@/API/pokemonAPI";

type Pokemon = {
  name: string,
  id: number
}

const getPokemons = (): number[] => {
  const pokemonArr: number[] = Array.from(Array(650));
  return pokemonArr.map((_, i:number) => i + 1);
};

const getPokemonOptions = async () => {
  const mixPokemons: number[] = getPokemons().sort( () => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixPokemons.splice(0, 4));
  return pokemons;
}

const getPokemonNames = async ([a, b, c, d]:number[]): Promise<Pokemon[]> => {
  const promiseArr = [
    pokemonApi.get(`/${ a }`),
    pokemonApi.get(`/${ b }`),
    pokemonApi.get(`/${ c }`),
    pokemonApi.get(`/${ d }`)
  ]

  const [p1, p2, p3, p4] = await Promise.all(promiseArr);
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id }
  ];
}


export default getPokemonOptions;
