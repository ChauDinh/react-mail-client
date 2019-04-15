import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";

import './App.css';
import NavigationBar from './components/Navigation/NavigationBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Home />
        <div className="App">
          <NavigationBar />
        </div>
      </Router>
    );
  }
}

export default App;
