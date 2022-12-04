import axios from "axios";

export const BASE_URL = "https://rickandmortyapi.com";

export const resourcesApi = {
  getAll: async () => {
    const response = await axios.get(`${BASE_URL}/api`);
    return response;
  },
};
