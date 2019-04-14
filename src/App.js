import React, { Component } from 'react';
import './App.css';
import Stats from "./components/Stats"
import Header from "./components/Header"
import "./backupindex.css"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header image={"https://as2.ftcdn.net/jpg/01/54/39/39/500_F_154393949_0jIyiL5pUoDdE5NyLKb0Bv84A0OIjBea.jpg"}/>
        <Stats />
      </div>
    );
  }
}

export default App;
