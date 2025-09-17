import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { pokemonKeys } from "../constants/queryKeys";
import { getPokemon } from "../apis/pokeAPI";

export const usePokemonQuery = (filters: string) => {
  return useQuery({
    queryKey: pokemonKeys.list(filters),
    queryFn: () => getPokemon(filters),
    staleTime: 5 * 60 * 1000, // 5분
  });
};
