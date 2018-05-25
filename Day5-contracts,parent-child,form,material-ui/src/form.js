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
  /*
  state = {
    name: "",
    company: "",
    contractdetail: ""
  };*/

  /*handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChange = company => event => {
    this.setState({ [company]: event.target.value });
  };

  handleChange = contractdetail => event => {
    this.setState({ [contractdetail]: event.target.value });
  };*/
  //handleClick = (name, company, contractdetail) => event => {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            //value={this.state.name}
            onChange={e => this.props.updateParent("name", e.target.value)}
            margin="normal"
          />
          <TextField
            id="company"
            label="Company"
            className={classes.textField}
            //value={this.state.company}
            onChange={e => this.props.updateParent("company", e.target.value)}
            margin="normal"
          />
          <TextField
            id="contractdetail"
            label="Contract Detail"
            className={classes.textField}
            //value={this.state.contractdetails}
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
