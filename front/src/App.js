import React, { Component } from 'react';
import './App.css';
import MessageBox from './components/MessageBox/MessageBox'
import InputBox from './components/InputBox/InputBox'

class App extends Component {
  render() {
    return (
      <div className="App">
          <MessageBox />
          <InputBox />

      </div>
    );
  }
}

export default App;
