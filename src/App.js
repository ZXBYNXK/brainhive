import React, { Component } from "react";
import "./App.css";
import Resource from "./components/Resource";
import resources from "./mock/resources";
import Form from "./components/Form";
import { resourceInputs } from "./mock/inputs";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resources
    }
  }


  renderPosts = () => {
    const display = this.state.resources.reverse().map((resource, index) => {
      return <Resource resource={resource} key={index} />;
    });

    return display;
  };

  submitResourceForm = (resourceForm) => {
    this.setState({
      ...this.state.resources,
      resources: [...this.state.resources, resourceForm]
    })
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
            <a href="#resources">Browse </a> and <a href="#">share</a>{" "}
            resources.
            <br />
            <br />
            📚 Happy learning!
          </pre>
     
          <Form
            styleRef={"Form"}
            inputs={resourceInputs}
            afterSubmit={this.submitResourceForm}
            submitText={"Submit Resource"}
          />
        </div>
        <div id="resources" className="resourceList">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default App;
