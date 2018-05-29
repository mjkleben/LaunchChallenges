import { render } from "react-dom";
import Form from "./form";
import "./App.css";
import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      contractdetail: "",
      array: []
    };
  }
  updateField = (field, newValue) => {
    this.setState({ [field]: newValue });
  };
  handleClick = event => {
    var object = {
      name: this.state.name,
      company: this.state.company,
      contractdetail: this.state.contractdetail
    };
    var array2 = this.state.array;
    array2.push(object);
    this.setState({ array: array2 });
  };

  render() {
    //console.log(this.state.array[0], this.state.array[1]);
    //the parameters in Form are props
    return (
      <div className="App">
        <Form
          updateParent={(field, newValue) => this.updateField(field, newValue)}
          clicker={(name, company, contractdetail) =>
            this.handleClick(name, company, contractdetail)
          }
        />
        <ul>
          {this.state.array.map(contracts => (
            <li>
              Name: {contracts.name}, Company: {contracts.company}, Contract
              Details: {contracts.contractdetail}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
