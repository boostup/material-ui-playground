import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "redux-store/events/slice";
import { selectIsDrawerOpen } from "redux-store/events/selectors";

import HtmlHeadTitle from "../HtmlHeadTitle";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Body from "../Body";

import { CssBaseline } from "@material-ui/core";
import { useStyles } from "../layout.styles";
import Backdrop from "layout/Backdrop/index";

function MainLayoutPageWrapper({ title, isLoading, children }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector(selectIsDrawerOpen());

  const handleDrawerToggle = () => {
    dispatch(actions.toggleDrawer());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HtmlHeadTitle title={title} />
      <Header onMenuIconClicked={handleDrawerToggle} />
      <Sidebar isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      <Body>
        <Backdrop />
        {children}
      </Body>
    </div>
  );
}

export default MainLayoutPageWrapper;
