import React, { Component } from "react";

import Resource from "./Resource";

class Index extends Component {
  render() {
    const { resources } = this.props;
    let changingIncrement = 10;
    let prevIncrement = changingIncrement / 2;
    let afterEvaluation =
      resources.length <= changingIncrement
        ? resources
        : resources.slice(
            changingIncrement - Math.round(prevIncrement),
            changingIncrement
          );

    return (
      <div className="d-flex ml-1 flex-wrap flex-row align-content-center">
        {afterEvaluation.map((resource) => {
          return <Resource resource={resource} />;
        })}
      </div>
    );
  }
}
// nextButton={/*props.nextButton()*/}
export default Index;
