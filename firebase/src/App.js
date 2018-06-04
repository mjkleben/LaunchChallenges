import { render } from "react-dom";
import Form from "./form";
import "./App.css";
import React, { Component } from "react";
import firebase from "firebase";


class App extends React.Component {

  constructor(props) {

  //INITIALIZE FIREBASE, YEET----------------------------------------------------
  var config = {
    apiKey: "AIzaSyCWHlQ-nd2iZMu3fULj9UkQpFEcKsRhKoQ",
    authDomain: "test-b3142.firebaseapp.com",
    databaseURL: "https://test-b3142.firebaseio.com",
    projectId: "test-b3142",
    storageBucket: "test-b3142.appspot.com",
    messagingSenderId: "1092793714889"
  };
firebase.initializeApp(config); 


    //CREATE THE FIELDS THAT IM GOING TO USE, YEET-------------------------
    super(props);
    this.state = {
      zodiac: "",
      birthday: "",
      array: []
    };
  }



  //UPDATE THE FIELD
  updateField = (field, newValue) => {
    this.setState({ [field]: newValue });
  };

  //EVENT LISTENER-------------------------------------------------------
  handleClick = event => {
    event.preventDefault();


    var object = {
      birthday: this.state.birthday,
      zodiac: this.state.zodiac
    };


    var array2 = this.state.array;
    array2.push(object);
    this.setState({ array: array2 });

    const list = firebase.database().ref("list");
    list.push(object);
  };


  //REMOVE FROM FIREBASE-----------------------------------------------

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/list/${itemId}`);
    itemRef.remove();
  }


//CHECK IF COMPONENT IS MOUNTED TO DOM--------------------------------------------
  componentDidMount() {
    const list = firebase.database().ref("list");
    list.on("value", snapshot => {
      let objects = snapshot.val();
      let updatedArray = [];
      for (let obj in objects) {
        updatedArray.push({
          birthday: objects[obj].birthday,
          zodiac: objects[obj].zodiac,
          id: obj
        });
      }
      this.setState({ array: updatedArray });
      if (this.state.birthday == "July 12"){
        this.state.zodiac = "Cancer";
      }
    });
  }

  //RENDER EVERYTHING------------------------------------------------------------
  render() {
    //console.log(this.state.array[0], this.state.array[1]);
    //the parameters in Form are props
    return (




      <div className="App">
        <Form
          updateParent={(field, newValue) => this.updateField(field, newValue)}
          clicker={(birthday, zodiac) =>
            this.handleClick(birthday, zodiac)
          }
        />


       
        <ul>
          {this.state.array.map(info => (
            <li>
              Birthday: {info.birthday}, 
              Your Zodiac is: {info.zodiac}
            </li>
          
          ))}
        </ul>

       

        <div class = "buttonThing">
        <ul>
          {this.state.array.map(info => (
            <button onClick={() => this.removeItem(info.id)}>
              Remove {info.birthday}
            </button>
          ))}
        </ul>
        </div>


      </div>
    );
  }
}
export default App;
