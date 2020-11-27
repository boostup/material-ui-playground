import { createSelector } from "reselect";

const selectEvents = (state) => state.events;

const selectIsDrawerOpen = () =>
  createSelector(selectEvents, (eventsState) => eventsState.isDrawerOpen);

const selectIsLoading = () =>
  createSelector(selectEvents, (eventsState) => eventsState.isLoading);

export { selectIsDrawerOpen, selectIsLoading };
