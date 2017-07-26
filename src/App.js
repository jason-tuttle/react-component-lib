import React, { Component } from 'react';
import './App.css';
import Highlight from './components/Highlight';
import Switch from './components/Switch';
import Spoiler from './components/Spoiler';

class App extends Component {
  render() {
    return (
      <div>
        <Highlight color="#FF9933" >Hello!</Highlight>
        <Switch />
        <Switch on />
        <Spoiler label="Spoiler Within">This should be hidden.</Spoiler>
        <Spoiler label="No Spoilers here" open>This should not be hidden.</Spoiler>
      </div>

    );
  }
}

export default App;
