import { createSelector } from "reselect";

const selectHeader = (state) => state.header;

const selectHeaderTitle = () =>
  createSelector(selectHeader, (headerState) => headerState.title);

export { selectHeaderTitle };
