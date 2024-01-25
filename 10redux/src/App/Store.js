// Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/Todo/TodoSlice";

export const Store = configureStore({
  reducer: todoReducer,
});

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
