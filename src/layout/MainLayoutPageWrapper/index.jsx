import React, { useState } from "react";

import HtmlHeadTitle from "../HtmlHeadTitle";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Body from "../Body";

import { CssBaseline } from "@material-ui/core";
import { useStyles } from "../layout.styles";
import Backdrop from "layout/Backdrop/index";

function MainLayoutPageWrapper({ title, isLoading, children }) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HtmlHeadTitle title={title} />
      <Header onMenuIconClicked={handleDrawerToggle} />
      <Sidebar isOpen={mobileOpen} onClose={handleDrawerToggle} />
      <Body>
        <p>
          <Backdrop />
        </p>
        {children}
      </Body>
    </div>
  );
}

export default MainLayoutPageWrapper;
