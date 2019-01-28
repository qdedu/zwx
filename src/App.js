import React, { Component } from 'react';
import './App.css';
import api from './api/api'

class App extends Component {



  componentDidMount() {
    var result =  api.getTest()
    console.log(result,1111)
  }

  render() {
    return (
      <div className="App">

        test
      </div>
    );
  }
}

export default App;
