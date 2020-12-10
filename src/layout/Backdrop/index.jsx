import React from "react";
import { useSelector } from "react-redux";

import { selectIsLoading } from "redux-store/events/selectors";

import MUIBackdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Backdrop() {
  const classes = useStyles();
  const isLoading = useSelector(selectIsLoading());

  return (
    <>
      <MUIBackdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </MUIBackdrop>
    </>
  );
}
