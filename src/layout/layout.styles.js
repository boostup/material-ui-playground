import { makeStyles } from "@material-ui/core/styles";

export const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    flexGrow: 1,
  },
  toolbar__title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth + theme.spacing(1),
    },
  },
  avatarArea: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "& .MuiTypography-root": {
      maxWidth: theme.spacing(15),
      marginLeft: theme.spacing(1),
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
