import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export default function DrawerOption({ i, label, style }) {
  return (
    <ListItem style={style} button key={i}>
      <ListItemIcon>{i % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
}

export function renderDrawerOption({ data, index, style }) {
  return <DrawerOption style={style} i={index} label={data[index]} />;
}
