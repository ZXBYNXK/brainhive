import React, { Component } from "react";
import Resources from "./componets/resource";
import NavBar from "./componets/navbar"
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    resources: [
      {
        posterName: "Darius",
        resourceAuthor: "DevEd",
        authorSkillLevel: "Advanced",
        Cohort: "0",
        title: "Express tutorial.",
        category: "",
        summary: "",
        link: "www.google.com/search?q=NetNinja%20React",
        resourceType: "2018-09-10.00:00:00.000z",
        datePublished: "2018-09-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 300,
        rating: 4,
        comments: [{ name: "Darius", comment: "Pretty good resource" }],
      },
      {
        posterName: "John Smitt",
        resourceAuthor: "NetNinja",
        authorSkillLevel: "Advanced",
        Cohort: "0",
        title: "React & Redux Complete Tutorial",
        category: "",
        summary: "",
        link: "www.google.com/search?q=NetNinja%20React",
        resourceType: "2018-09-10.00:00:00.000z",
        datePublished: "2018-09-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 300,
        rating: 4,
        comments: [{ name: "Darius", comment: "Pretty good resource" }],
      },
      {
        posterName: "DD",
        resourceAuthor: "NetNinja",
        authorSkillLevel: "Advanced",
        Cohort: "0",
        title: "Bootstrap",
        category: "",
        summary: "",
        link: "www.google.com/search?q=NetNinja%20React",
        resourceType: "2018-09-10.00:00:00.000z",
        datePublished: "2018-09-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 300,
        rating: 4,
        comments: [{ name: "Darius", comment: "Pretty good resource" }],
      },
      {
        posterName: "Darius",
        resourceAuthor: "NetNinja",
        authorSkillLevel: "Advanced",
        Cohort: "0",
        title: "React & Redux Complete Tutorial",
        category: "",
        summary: "",
        link: "www.google.com/search?q=NetNinja%20React",
        resourceType: "2018-09-10.00:00:00.000z",
        datePublished: "2018-09-10.00:00:00.000z",
        videoLength: null,
        timeToComplete: 300,
        rating: 4,
        comments: [{ name: "Darius", comment: "Pretty good resource" }],
      },
    ],
  };

  //   resource =
  render() {

    return (
      <div className="App">
      <NavBar />
      <Resources resources={this.state.resources} />
      </div>
    );
  }
}

export default App;
