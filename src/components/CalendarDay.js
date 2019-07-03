import React, { Component } from 'react';
import ListItem from './ListItem';

class CalendarDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'calendar list'
    }
  }
  render() {
    return (
      <div>
        <ListItem show={this.state.show} />
      </div>
    );
  }
}

export default CalendarDay;