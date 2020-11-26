import React from "react";

import { useStyles } from "../layout.styles";

export default function Body({ children }) {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  );
}
