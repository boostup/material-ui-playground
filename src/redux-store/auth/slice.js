import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

export const { actions } = slice;
export const authReducer = slice.reducer;
export default actions;
