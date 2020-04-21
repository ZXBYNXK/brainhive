import React, { Component } from "react";
import Resource from "../../components/Resource";
import resources from "../../mock/resources";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources,
    };
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
      resources: [...this.state.resources, resourceForm],
    });
  };
  render() {
    return (
      <div className="HomePage">
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
        </div>
        <div id="resources" className="resourceList">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default HomePage;
