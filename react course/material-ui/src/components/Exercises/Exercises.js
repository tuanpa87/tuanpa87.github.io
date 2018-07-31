import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const exercises = props => {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane
          exercises={props.exercises}
          category={props.category}
          onSelect={props.onSelect}
        />
      </Grid>
      <Grid item sm>
        <RightPane exercise={props.exercise} />
      </Grid>
    </Grid>
  );
};

export default exercises;
