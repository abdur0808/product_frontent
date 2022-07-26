import { configureStore } from "@reduxjs/toolkit";
import productSlices from "../slices/productSlices";
const store = configureStore({
  reducer: productSlices,
});
export default store;
