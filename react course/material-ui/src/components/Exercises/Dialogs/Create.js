import React, { Fragment, Component } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField
} from "@material-ui/core/";
import { Add } from "@material-ui/icons/";

export default class extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({target: {value}}) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    })
  }

  render() {
    const { open, exercise: {title, description, muscles} } = this.state;

    return (
      <Fragment>
        <Button variant="fab" mini onClick={this.handleToggle}>
          <Add />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
              />
              <br/>
              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
                multiline
                rows="4"
              />
              <br/>
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary">Create</Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
