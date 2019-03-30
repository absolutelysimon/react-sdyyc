import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Footer} from './Components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          Content
        <Footer/>
      </div>
    );
  }
}

export default App;
