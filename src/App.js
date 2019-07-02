import React, { Component } from 'react';
import './App.css';
import CalendarDay from './components/CalendarDay';
import { Jumbotron, Table } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Calendar Day"
    }
  }
  render() {
    return (
      <div className="App">
        <Jumbotron className="bg-info text-white">
          <h1>Calendar</h1>
          <h5>Weekly Schedule</h5>
        </Jumbotron>
        <Table bordered>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
        </Table>


        <CalendarDay title={this.state.title} />
      </div>
    );
  }
}

export default App;
