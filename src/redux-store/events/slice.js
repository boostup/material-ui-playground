import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "events",
  initialState: {
    isLoading: false,
    isDrawerOpen: false,
  },
  reducers: {
    toggleLoading(state, { payload }) {
      state.isLoading = payload;
    },
    toggleDrawer(state) {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const { actions } = slice;
export const eventsReducer = slice.reducer;
export default actions;
