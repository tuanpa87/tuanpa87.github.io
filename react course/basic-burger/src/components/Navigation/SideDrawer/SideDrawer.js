import React from "react";
import Logo from "../Logo/Logo";
import classes from "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo //height="10%"
        />
      </div>
      <NavigationItems />
    </div>
  );
};

export default sideDrawer;
