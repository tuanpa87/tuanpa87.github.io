import React from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Paper: {
    padding: 20,
    margin: "10px auto"
  }
};

const rightPane = props => {
  const { classes } = props;
  return <Paper className={classes.Paper}>Right Pane </Paper>;
};

export default withStyles(styles)(rightPane);
