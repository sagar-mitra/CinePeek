import { configureStore } from "@reduxjs/toolkit";
import cinePeekReducer from "./cinePeekSlice.js";

const store = configureStore({
  reducer: {
    cinepeek: cinePeekReducer,
  },
});

export default store;
