import React, { Component } from "react";
import "./App.css";
import App from "./App";

import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});
class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            onChange={e => this.props.updateParent("name", e.target.value)}
            margin="normal"
          />
          <TextField
            id="company"
            label="Company"
            className={classes.textField}
            onChange={e => this.props.updateParent("company", e.target.value)}
            margin="normal"
          />
          <TextField
            id="contractdetail"
            label="Contract Detail"
            className={classes.textField}
            onChange={e =>
              this.props.updateParent("contractdetail", e.target.value)
            }
            margin="normal"
          />
        </form>
        <Button
          variant="raised"
          color="primary"
          onClick={e => this.props.clicker(e)}
        >
          Submit
        </Button>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
