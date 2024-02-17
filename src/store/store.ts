import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cards-slice";

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
  },
});
