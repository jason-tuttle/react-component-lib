import React, { Component } from 'react';

class Spoiler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open,
    };
  }

  toggleDisplay = () => {
    const state = !this.state.open;
    this.setState({open: state});
  }

  render() {
    const {
        headerBgColor = 'gray',
        headerColor = 'white',
        maxHeight = '200px',
        bordered = false,
      } = this.props;

    const animatedStyle = {
      margin: '25px',
      border: bordered ? '1px solid #aaa' : 'none',
      borderRadius: '5px',
      overflow: 'scroll',
      maxHeight: maxHeight,
      minHeight: '2em',
      transition: 'all 0.25s'
    }
    const animatedStyleClosed = {
      margin: '25px',
      border: bordered ? '1px solid #aaa' : 'none',
      borderRadius: '5px',
      overflow: 'hidden',
      maxHeight: '32px',
      transition: 'all 0.25s'
    }
    const headerStyle = {
      zIndex: '10',
      position: 'sticky',
      top: '0px',
      backgroundColor: headerBgColor,
      border: 'none',
      fontSize: '1em',
      width: '100%',
      padding: '5px',
      color: headerColor,
      fontWeight: 'bold'
    }
    const bodyStyleOpen = {
      opacity: 1.0,
      paddingLeft: '10px',
      transition: 'opacity 0.25s ease-in'
    }
    const bodyStyleClosed = {
      opacity: 0.0,
      paddingLeft: '10px',
      transition: 'opacity 0.25s ease-in'
    }
    const {open} = this.state;
    return (
      <div style={open ? animatedStyle : animatedStyleClosed} onClick={this.toggleDisplay}>
        <button style={headerStyle}>{this.props.label}</button>
        <div style={open ? bodyStyleOpen : bodyStyleClosed}>{this.props.children}</div>
      </div>
    );
  }

}

export default Spoiler;
