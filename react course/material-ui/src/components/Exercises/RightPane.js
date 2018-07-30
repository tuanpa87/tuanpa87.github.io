import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Paper: {
    padding: 20,
    margin: "10px "
  }
};

const rightPane = props => {
  const { classes } = props;
  return (
    <Paper className={classes.Paper}>
      <Typography variant="display1">Welcome!</Typography>

      <Typography variant="subheading" style={{ marginTop: 20 }}>
        Please select an exercise from the list on the left
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(rightPane);
