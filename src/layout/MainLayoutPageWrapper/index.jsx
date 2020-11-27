import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import eventsActions from "redux-store/events/slice";
import { selectIsDrawerOpen } from "redux-store/events/selectors";
import { selectHeaderTitle } from "layout/Header/selectors";
import headerActions from "layout/Header/slice";

import HtmlHeadTitle from "../HtmlHeadTitle";
import Sidebar from "../Sidebar";
import Header from "../Header";
import Body from "../Body";

import { CssBaseline } from "@material-ui/core";
import { useStyles } from "../layout.styles";
import Backdrop from "layout/Backdrop/index";

function MainLayoutPageWrapper({ title = "Material UI Playground", children }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const headerTitle = useSelector(selectHeaderTitle());
  const isDrawerOpen = useSelector(selectIsDrawerOpen());

  useEffect(() => {
    dispatch(headerActions.setTitle(title));
  }, [dispatch, title]);

  const handleDrawerToggle = () => {
    dispatch(eventsActions.toggleDrawer());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HtmlHeadTitle title={headerTitle} />
      <Header title={headerTitle} onMenuIconClicked={handleDrawerToggle} />
      <Sidebar isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      <Body>
        <Backdrop />
        {children}
      </Body>
    </div>
  );
}

export default MainLayoutPageWrapper;
