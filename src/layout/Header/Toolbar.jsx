import React from "react";
import { useSelector } from "react-redux";

import { selectAuthUser } from "redux-store/auth/selectors";

import MUIToolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

import AvatarArea from "./AvatarArea";
import useMenuOptions from "./useMenuOptions";

export default function Toolbar({ title, classes, onClick }) {
  const menuOptions = useMenuOptions();
  const user = useSelector(selectAuthUser);
  const userAvatar = user?.images[0]?.url;
  const userName = user?.display_name;

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
      <AvatarArea
        classes={classes}
        src={userAvatar}
        displayName={userName}
        menuOptions={menuOptions}
      />
    </MUIToolbar>
  );
}
