import React from 'react';
import './App.css';
import CalendarDay from './components/CalendarDay';
import { Jumbotron, Table } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Jumbotron className="bg-info text-white">
        <h1>Calendar</h1>
        <h5>Weekly Schedule</h5>
      </Jumbotron>
      <div className="px-3">
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
            <tr>
              <td><CalendarDay /></td>
              <td><CalendarDay /></td>
              <td><CalendarDay /></td>
              <td><CalendarDay /></td>
              <td><CalendarDay /></td>
              <td><CalendarDay /></td>
              <td><CalendarDay /></td>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
}


export default App;
