import React from "react";

import MUIToolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

export default function Toolbar({ title, classes, onClick }) {
  return (
    <MUIToolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onClick}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.toolbar__title} noWrap>
        {title}
      </Typography>
    </MUIToolbar>
  );
}
