import { createSlice } from "@reduxjs/toolkit";

import { resourcesApi } from "../../api";

const initialState = {
  characters: "",
  episodes: "",
  locations: "",
};

export const availableResourcesSlice = createSlice({
  name: "availableResources",
  initialState,
  reducers: {
    getResourcesSuccess: (state, action) => {
      const { characters, episodes, locations } = action.payload;
      state.characters = characters;
      state.episodes = episodes;
      state.locations = locations;
    },
  },
});

export const { getResourcesSuccess } = availableResourcesSlice.actions;

export const getResources = () => async (dispatch) => {
  try {
    const response = await resourcesApi.getAll();
    dispatch(getResourcesSuccess(response.data));
  } catch (error) {
    console.log({ error });
  }
};

export default availableResourcesSlice.reducer;
