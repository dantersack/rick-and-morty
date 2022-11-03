import axios from "axios";

export const resourcesApi = {
  getAll: async () => {
    const response = await axios.get("https://rickandmortyapi.com/api");
    return response;
  },
};
