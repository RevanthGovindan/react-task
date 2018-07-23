import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="checklist">
          <List />
        </div>
      </div>
    );
  }
}
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{ title: "title1", items: ['abc', 'bcd', 'cde'] }, { title: "title2", items: ['abc', 'bcd', 'cde'] }, { title: "title3", items: ['abc', 'bcd', 'cde'] }] }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(titleIndex, event) {
    const data = this.state.data;
    const name = event.target.name;
    if (name === "title") {
      data[titleIndex].title = event.target.value;
    }
    this.setState({ data })
    event.preventDefault();
  }
  removeTask(titleIndex, taskIndex) {
    const data1 = this.state.data[titleIndex].items;
    data1.splice(taskIndex, 1);
    this.setState({ data1 })
  }
  addTask(titleIndex) {
    const data = this.state.data;
    const number = data[titleIndex].items.length + 1;
    data[titleIndex].items.push('new' + number);
    this.setState({ data });
  }
  addTitle() {
    const data = this.state.data;
    const body = { title: 'title', items: ['new'] }
    data.push(body);
    this.setState({ data });
  }
  removeTitle(titleIndex) {
    const data1 = this.state.data;
    data1.splice(titleIndex, 1);
    this.setState({ data1 });
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.addTitle.bind(this)}>Add New</button>
        <div className="box">
          {
            this.state.data.map((data, titleIndex) =>
              <div className="item"> 
                <div className="datas">
                  <div className="titlebar">
                    <input value={data.title} name="title" onChange={this.handleChange.bind(this, titleIndex)} id="inpt" />
                    <button type="button" className="close cls" aria-label="Close" onClick={this.removeTitle.bind(this, titleIndex)}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  {data.items.map((item, taskIndex) => <li key={item}>
                    <input type="checkbox" value={item} />{item}<button type="button" className="close" aria-label="Close" onClick={this.removeTask.bind(this, titleIndex, taskIndex)}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </li>)}
                  <button className="btn btn-danger" onClick={this.addTask.bind(this, titleIndex)}>Add</button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
export default App;
