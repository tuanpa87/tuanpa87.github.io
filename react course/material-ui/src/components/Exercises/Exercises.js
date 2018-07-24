import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const exercises = props => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane />
      </Grid>
      <Grid item sm>
        <RightPane />
      </Grid>
    </Grid>
  );
};

export default exercises;
