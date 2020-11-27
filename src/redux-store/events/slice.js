import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
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

export const { actions } = eventsSlice;
export const eventsReducer = eventsSlice.reducer;
