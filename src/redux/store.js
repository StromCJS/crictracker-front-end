import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import matchReducer from "./matchSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    match: matchReducer,
  },
});

export default store;
