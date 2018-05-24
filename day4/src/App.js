import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listofentries: [],
      listofusernames: [],
      listofcommits: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/repos/facebook/react/stats/contributors")
      .then(response => {
        var array = [];
        var array2 = [];
        var array3 = [];
        for (let x = 0; x < 50; x++) {
          var entry = {
            username: response.data[x].author.login,
            commits: response.data[x].total
          };
          array.push(entry);
          array2.push(entry.username);
          array3.push(entry.commits);
        }
        this.setState({ listofentries: array });
        this.setState({ listofusernames: array2 });
        this.setState({ listofcommits: array3 });
      });
  }
  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }
  render() {
    return (
      <div>
        <div>
          <h1>I love Axios.</h1>
          <VictoryChart
            domainPadding={10}
            theme={VictoryTheme.material}
            animate={{ duration: 500 }}
          >
            <VictoryAxis
              tickValues={this.state.listofusernames}
              style={{
                ticks: { stroke: "black", size: 3 },
                padding: 10,
                tickLabels: { angle: -60, fontSize: 5 }
              }}
            />

            <VictoryAxis
              dependentAxis
              tickValues={this.state.listofcommits}
              style={{
                ticks: { stroke: "black", size: 3 },
                padding: 10,
                tickLabels: { fontSize: 5 }
              }}
            />

            <VictoryStack colorScale={"warm"}>
              <VictoryBar
                data={this.state.listofentries}
                x={"username"}
                y={"commits"}
                style={{ data: { width: 12 } }}
                animate={{
                  onExit: {
                    duration: 500,
                    before: () => ({ _y: 0, fill: "orange", label: "BYE" })
                  }
                }}
              />
            </VictoryStack>
          </VictoryChart>
        </div>
        <ul>
          {this.state.listofentries.map(listofentry => (
            <li>
              Username: {listofentry.username}, Commits: {listofentry.commits}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
