import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const rentModalSlice = createSlice({
  name: "rent",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { close, open } = rentModalSlice.actions;

export default rentModalSlice.reducer;
