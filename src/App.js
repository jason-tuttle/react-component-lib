import React, { Component } from 'react';
import './App.css';
import Highlight from './components/Highlight';
import Switch from './components/Switch';

class App extends Component {
  render() {
    return (
      <div>
        <Highlight color="#FF9933" >Hello!</Highlight>
        <Switch />
        <Switch on />
      </div>

    );
  }
}

export default App;
