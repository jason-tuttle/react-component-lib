import React, { Component } from 'react';


class Class extends Component {
  render() {
    const hColor = this.props.color;
    const highlightStyle = {
      backgroundColor: hColor
    }
    return (
      <span style={highlightStyle}>{this.props.children}</span>
    );
  }

}

export default Class;
