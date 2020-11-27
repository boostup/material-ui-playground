import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "header",
  initialState: {
    title: "",
  },
  reducers: {
    setTitle(state, { payload }) {
      state.title = payload;
    },
  },
});

export const { actions } = slice;
export const headerReducer = slice.reducer;
export default actions;
