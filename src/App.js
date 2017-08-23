import React, { Component } from 'react';
import './App.css';
import Highlight from './components/Highlight';
import Switch from './components/Switch';
import Spoiler from './components/Spoiler';
import SortableTable from './components/SortableTable';

const data = [
  ['Letter', 'Value'],
  ['A', 3],
  ['B', 1],
  ['C', 8],
  ['D', 2]
];

class App extends Component {
  render() {
    return (
      <div>
        <Highlight color="#FF9933" >Hello!</Highlight>
        <Highlight color="#FFEC00" >Goodbye!</Highlight>
        <Switch />
        <Switch on />
        <Spoiler label="Spoiler Within" headerBgColor='#6080ca' maxHeight='400px'>
          <p>This should be hidden.</p>
          <p>Can I put a whole bunch of stuff in here?</p>
          <p>
            <ul>
              <li>How about</li>
              <li>A long</li>
              <li>List of</li>
              <li>text items</li>
              <li>that goes</li>
              <li>right here?</li>
            </ul>
          </p>
          <p>I'm going to see if I can make this tray slide out.</p>
        </Spoiler>
        <Spoiler label="No Spoilers here" open headerColor='blue' >This should not be hidden.</Spoiler>
        <SortableTable data={data} />
      </div>

    );
  }
}

export default App;
