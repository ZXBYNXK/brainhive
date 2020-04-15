import React, { Component } from "react";
import "./App.css";
import Resource from "./components/Resource";
import resources from "./mock/resources";

class App extends Component {
  //[<Resource resource={aResource}/>, <Resource resource={aResource}]
  // constructor(props) {
  //   super(props);
  //   this.renderPosts.bind(this);
  // }
  // Resource = require("./components/Resource");

  renderPosts = () => {
    const display = resources.map((resource, index) => {
      return <Resource resource={resource} key={index}/>;
    });

    return display;
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <img className="logo" src="https://bit.ly/3ep0Q4Y" />
          <h1 className="title">BrainHive </h1>
        </div>
        <div className="jumbo">
          <pre className="jumboText">
            Welecome to brainhive!
            <br />
            <br />
            Feel free to browse the <a href="#resources">resources</a>.
            <br />
            <br />
            📚 Happy learning!
          </pre>
        </div>
        <div id="resources" className="resourceList">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default App;
