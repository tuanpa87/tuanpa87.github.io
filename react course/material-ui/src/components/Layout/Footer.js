import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// can use props and  props.muscles
//props here is an object

const footer = ({ muscles }) => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All" />
        {muscles.map((muscle, index) => <Tab key={index} label={muscle} />)}
      </Tabs>
    </Paper>
  );
};

export default footer;
