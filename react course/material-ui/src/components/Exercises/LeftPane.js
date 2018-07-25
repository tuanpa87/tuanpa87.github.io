import React, { Fragment } from "react";
import {
  Paper,
  Typography,
  List,
  ListItemText,
  ListItem
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  Paper: {
    padding: 20,
    margin: "10px auto",
    textTransform: "capitalize"
  }
};

const leftPane = props => {
  const { classes } = props;

  // props.exercises.map(([a, b]) => {
  //   console.log(a);
  // });

  return (
    <Paper className={classes.Paper}>
      {props.exercises.map(([group, exercises], index) => {
        console.log(group)
        console.log(exercises);
        return (
          <Fragment key={group}>
            <Typography variant="headline"> {group} </Typography>

            <List>
              {exercises.map(({ title }) => {
                console.log({ title });
                return (
                  <ListItem button key={title}>
                    <ListItemText primary={title} />
                  </ListItem>
                );
              })}
            </List>
          </Fragment>
        );
      })}
    </Paper>
  );
};

export default withStyles(styles)(leftPane);
