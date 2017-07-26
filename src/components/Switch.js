import React, { Component } from 'react';

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: this.props.on
    };
  }

  onClick = () => {
    const state = !this.state.switched;
    this.setState({switched: state});
  }

  render() {
    const switchBox = {
      border: '1px solid gray',
      backgroundColor: 'white',
      borderRadius: '5px',
      lineHeight: '2em',
      width: '60px',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      padding: '2px 5px'
    }
    const switchOn = {
      backgroundColor: 'green',
      borderRadius: '4px',
      lineHeight: '1.2em',
      color: 'white',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between'
    }
    const switchOff = {
      backgroundColor: 'gray',
      borderRadius: '4px',
      lineHeight: '1.2em',
      color: 'white',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between'
    }
    const switchStyle = {
      display: 'inline-block',
      backgroundColor: 'white',
      border: '1px solid gray',
      borderRadius: '3px',
      width: '30px',
      height: '1.2em'
    }
    if (this.state.switched) {
      return <div style={switchBox} onClick={this.onClick}><div style={switchOn}>On<div style={switchStyle}></div></div></div>
    } else {
      return <div style={switchBox} onClick={this.onClick}><div style={switchOff}><div style={switchStyle}></div></div></div>
    }
  }

}

export default Class;
