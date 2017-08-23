import React, { Component } from 'react';


class Highlight extends Component {
  render() {
    const hColor = this.props.color;
    const highlightStyle = {
      backgroundColor: hColor
    }
    return (
      <span className="highlight" style={highlightStyle}>{this.props.children}</span>
    );
  }

}

export default Highlight;
