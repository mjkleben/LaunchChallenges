import { render } from "react-dom";
import Form from "./form";
import "./App.css";
import React, { Component } from "react";
import firebase from "./firebase.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      contractdetail: "",
      id: "",
      array: []
    };
  }
  updateField = (field, newValue) => {
    this.setState({ [field]: newValue });
  };
  handleClick = event => {
    event.preventDefault();

    var object = {
      name: this.state.name,
      company: this.state.company,
      contractdetail: this.state.contractdetail
    };
    var array2 = this.state.array;
    array2.push(object);
    this.setState({ array: array2 });

    const list = firebase.database().ref("list");
    list.push(object);
  };

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/list/${itemId}`);
    itemRef.remove();
  }

  componentDidMount() {
    const list = firebase.database().ref("list");
    list.on("value", snapshot => {
      let objects = snapshot.val();
      let updatedArray = [];
      for (let obj in objects) {
        updatedArray.push({
          name: objects[obj].name,
          company: objects[obj].company,
          contractdetail: objects[obj].contractdetail,
          id: obj
        });
      }
      this.setState({ array: updatedArray });
    });
  }

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

        <ul>
          {this.state.array.map(contracts => (
            <button onClick={() => this.removeItem(contracts.id)}>
              Remove {contracts.name}
            </button>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
