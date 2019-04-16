import React, { Component } from 'react';
import './App.css';
import Stats from "./components/Stats"
import Header from "./components/Header"
import "./backupindex.css"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header image={"https://static.vecteezy.com/system/resources/previews/000/135/618/non_2x/vector-basketball-texture-pattern.jpg"}/>
        <Stats />
      </div>
    );
  }
}

export default App;
