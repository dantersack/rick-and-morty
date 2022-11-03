import { configureStore } from "@reduxjs/toolkit";
import availableResourcesReducer from "../features/resources/availableResourcesSlice";

export const store = configureStore({
  reducer: {
    resources: availableResourcesReducer,
  },
});
