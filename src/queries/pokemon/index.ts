import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";
import * as i from "types";

export const useGetPokemon = (
  offset: number,
  limit: number
): UseQueryResult<i.PokeMonRes | undefined> => {
  return useQuery(
    ["pokemon", offset],
    async () =>
      await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
      )
  );
};
