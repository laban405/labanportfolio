import React, { useState } from "react";
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from "react-scroll-section";
import {
  Button,
  Box,
  colors,
  AppBar,
  Toolbar,
  MenuItem,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
   // padding:120,

    backgroundColor: "transparent",
  },
  spaceItem: {
    flexGrow: 1,
  },
  menuItem: {
    height: "100%",
  },
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: 10,
    minWidth: 80,
  },
  button: {
    color: colors.grey[600],
    padding: "10px 8px",
    justifyContent: "center",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main,
      "& $icon": {
        color: colors.grey[400],
      },
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  active: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.white,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.white,
    },
    "&:hover": {
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.secondary.dark,
      color: "#ffffff",
      "& $icon": {
        color: "#ffffff",
      },
    },
  },
}));

//   const CustomRouterLink = forwardRef((props, ref) => (
//     <div
//       ref={ref}
//       style={{ flexGrow: 1 }}
//     >
//       <RouterLink {...props} />
//     </div>
//   ));
const MyMenuItem = withStyles({
  root: {
    "&:hover": {
      backgroundColor: "#fb5012 !important",
      color: "#ffffff",
    },
    "&:selected": {
      backgroundColor: "red !important",
      color: "blue",
    },
  },
})(MenuItem);

const Menu = () => {
  const homeSection = useScrollSection("home");
  const aboutSection = useScrollSection("about");
  const portfolioSection = useScrollSection("portfolio");
  const workSection = useScrollSection("work");
  const funSection = useScrollSection("fun");
  const classes = useStyles();

  const [selected, setSelected] = useState();

  const updateSelected = (selectedIndex, activeSection) => {
    // setSelected(selectedIndex);
    activeSection.onClick();
  };

  return (
      <div className={classes.root}>
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "white",
        paddingTop: 0,
        paddingBottom: 0,
       // margin: 100,
      }}
    >
      <Toolbar
        style={{
         
          paddingTop: 0,
          paddingBottom: 0,
          margin: 0,
          height:"50px"
        }}
      >
        <div className={classes.spaceItem}></div>
        <MyMenuItem className={classes.menuItem}
          onClick={() => updateSelected(0, homeSection)}
          selected={homeSection.selected}
        >
          Home
        </MyMenuItem>
        <MyMenuItem className={classes.menuItem}
          onClick={() => updateSelected(1, portfolioSection)}
          selected={portfolioSection.selected}
        >
          {" "}
          Portfolio
        </MyMenuItem>
        <MyMenuItem
          className={classes.menuItem}
          onClick={() => updateSelected(2, workSection)}
          selected={workSection.selected}
        >
          Work
        </MyMenuItem>
        <MyMenuItem
          className={classes.menuItem}
          onClick={() => updateSelected(3, aboutSection)}
          selected={aboutSection.selected}
        >
          About
        </MyMenuItem>
        <MyMenuItem
          className={classes.menuItem}
          onClick={() => updateSelected(4, funSection)}
          selected={funSection.selected}
        >
          Fun
        </MyMenuItem>
      </Toolbar>
    </AppBar></div>
  );
};

export default Menu;
