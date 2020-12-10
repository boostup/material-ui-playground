import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "events",
  initialState: {
    isLoading: false,
    isDrawerOpen: false,
    error: null,
  },
  reducers: {
    toggleLoading(state, { payload }) {
      state.isLoading = payload;
    },
    toggleDrawer(state) {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    setError(state, { payload }) {
      state.error = payload.message;
    },
  },
});

export const { actions } = slice;
export const eventsReducer = slice.reducer;
export default actions;
