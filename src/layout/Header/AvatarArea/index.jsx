import React, { useState } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ContextualMenu from "components/ContextualMenu";

function AvatarArea({ src, displayName, menuOptions, classes }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.avatarArea}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircle src={src} alt={displayName} />
        <Typography noWrap>{displayName}</Typography>
      </IconButton>

      <ContextualMenu
        menuId="avatar-menu"
        menuOptions={menuOptions}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </div>
  );
}

export default AvatarArea;
