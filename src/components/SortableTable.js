import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SortableTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: 0,
      sort: 'asc'
    };
  }

  render() {
    return (
      <div>Sortable Table</div>
    );
  }

}

export default SortableTable;
