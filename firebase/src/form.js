import React, { Component } from "react";
import "./App.css";
import App from "./App";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Home from "./back.js";

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

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + "https://imgur.com/NrZ963i" + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}></div>;
}


class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
    <div class = "whole_container">



      <p class = "Intro">Find out what your Zodiac Sign is! Enter the form below and click the Button!!</p>
      <div class = "centerEverything">
      <div style={{backgroundImage: 'url(this.state.image)'}}></div>

      <div>
        <form className={classes.container} noValidate autoComplete="off">



          <TextField
            id="birthday"
            label="Only works with July 12"
            className={classes.textField}
            onChange={e => this.props.updateParent("birthday", e.target.value)}
            margin="normal"
          />



        </form>




        <Button
          variant="raised"
          color="primary"
          onClick={e => this.props.clicker(e)}>
          Find out your Zodiac Sign!
        </Button>


        </div>

      </div>

    </div>

    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
