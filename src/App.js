// Packages
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";






//  DR: CSS
import "./App.css";

// DR: General Components
import NavBar from "./components/NavBar"

//  DR: Route Components for other pages
import ShareResourcePage from "./components/routes/ShareResourcePage";
import HomePage from "./components/routes/HomePage";

//  DR: Data needed for component testing, and clean code.

//  DR: The Entire App
class App extends Component {
 

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <NavBar/>
          </div>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/share-resource" component={ShareResourcePage} />
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
