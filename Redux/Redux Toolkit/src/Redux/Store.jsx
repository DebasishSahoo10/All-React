import { configureStore as createStore } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice";
import { humansSlice } from "./humansSlice";

export const store = createStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans : humansSlice.reducer,
  },
});
