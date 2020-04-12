import React, { Component } from "react";
import Resource from './componets/Resource';




import "./App.css";

class App extends Component {
  resource = {
    posterName:'Darius',
    resourceAuthor:'NetNinja',
    authorSkillLevel: 'Advanced',
    Cohort: '0',
    title: 'React & Redux Complete Tutorial',
    category: '',
    summary:'',
    link:'www.google.com/search?q=NetNinja%20React',
    resourceType:'2018-09-10.00:00:00.000z',
    datePublished: '2018-09-10.00:00:00.000z',
    videoLength: null,
    timeToComplete: 300,
    rating: 4,
    comments: [{name:'Darius', comment:'Pretty good resource'}]
}  
  render() {
    return (
      <div className="App">
        <h1>Welcome to brain hive.</h1>
        <Resource resource={this.resource} />
      </div>
    );
  }
}

export default App;
