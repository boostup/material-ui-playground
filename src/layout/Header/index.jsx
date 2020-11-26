import React from "react";

import AppBar from "@material-ui/core/AppBar";

import Toolbar from "./Toolbar";
import { useStyles } from "../layout.styles";

export default function Header({ title, onMenuIconClicked }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar title={title} classes={classes} onClick={onMenuIconClicked} />
    </AppBar>
  );
}
