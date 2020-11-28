import React from "react";

import { useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";

import DrawerContent from "./DrawerContent";
import { menuOptionsTop, menuOptionsBottom } from "./menuOptions";

import { useStyles } from "../layout.styles";

function Sidebar({ isOpen, toggleDrawer }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <SwipeableDrawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={isOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: false,
          }}
        >
          <DrawerContent
            menuOptionsTop={menuOptionsTop}
            menuOptionsBottom={menuOptionsBottom}
            classes={classes}
          />
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerContent
            menuOptionsTop={menuOptionsTop}
            menuOptionsBottom={menuOptionsBottom}
            classes={classes}
          />
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default Sidebar;
