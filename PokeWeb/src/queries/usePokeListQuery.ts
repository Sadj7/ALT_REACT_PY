import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PokemonDetail } from "../components/types";

interface PokeListResponse {
  count: number;
  results: PokemonDetail[];
}

export function usePokeListQuery(limit: number, offset: number) {
  return useQuery({
    queryKey: ["pokemons", { limit, offset }],
    queryFn: async () => {
      const response = await fetch(
        `https://pokeapi.fly.dev/2WEBD/pokemons?limit=${limit}&offset=${offset}`
      );
      const json = await response.json();
      return json as PokeListResponse;
    },
    placeholderData: keepPreviousData,
  });
}
