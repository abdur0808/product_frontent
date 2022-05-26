import { configureStore } from "@reduxjs/toolkit";
import postCodeReducer from "../slices/postCodeSlices";
const store = configureStore({
  reducer: postCodeReducer,
});
export default store;
