import React, { Component } from 'react';

class Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open
    };
  }

  toggleDisplay = () => {
    const state = !this.state.open;
    this.setState({open: state});
  }

  render() {
    const headerStyle = {
      backgroundColor: 'gray',
      border: '1px solid black',
      width: '100%',
    }
    const bodyStyleOpen = {
      border: '1px solid gray',
      paddingLeft: '10px'
    }
    const bodyStyleClosed = {
      display: 'none'
    }
    const show = this.state.open;
    return (
      <div onClick={this.toggleDisplay}>
        <div style={headerStyle}>{this.props.label}</div>
        <div style={show ? bodyStyleOpen : bodyStyleClosed}>{this.props.children}</div>
      </div>
    );
  }

}

export default Class;
