import React, { Component } from 'react';
import './App.css';
import CheckBox from './CheckBox.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: JSON.parse(localStorage.getItem('data')) }
  }
  render() {
    return (
      <div className="App">
        <div className="checklist">
        <CheckBox data={this.state.data}/>
        </div>
      </div>
    );
  }
}
export default App;
