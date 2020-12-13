import React, { Component } from 'react';
import Nav from './Nav';
import '../css/NextWeek.css';

class NextWeek extends Component {
  constructor(props){
    super(props)
    this.state = {
      test: ""
    }
  }

    render() {
      return (
        <div className="next-week-container">
          <Nav/>
          <p>Next Week</p>
        </div>      
      )
    }
}

export default NextWeek;