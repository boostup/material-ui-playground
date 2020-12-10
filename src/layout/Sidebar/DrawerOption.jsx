import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";

import { getIconComponent } from "./menuOptions";

export default function DrawerOption({ i, label, icon, style }) {
  return (
    <ListItem style={style} button key={i}>
      <ListItemIcon>{getIconComponent(icon)}</ListItemIcon>
      <Typography noWrap title={label}>
        {label}
      </Typography>
    </ListItem>
  );
}

export function renderDrawerOption({ data, index, style }) {
  return (
    <DrawerOption
      style={style}
      i={index}
      items={data}
      label={data[index].label}
      icon={data[index].icon}
    />
  );
}
