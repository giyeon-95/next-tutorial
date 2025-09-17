import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPokemon = async (params : string) => {
  const response = await apiClient.get(
    "https://pokeapi.co/api/v2/pokemon/ditto",
    { params }
  );
  return response.data;
};
