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
    this.state = { data: JSON.parse(localStorage.getItem('data')) }
  }
  handleChange(titleIndex, event) {
    const data = this.state.data;
    const name = event.target.name;
    if (name === "title") {
      data[titleIndex].title = event.target.value;
    }
    this.setState({ data });
    localStorage.setItem('data',JSON.stringify(this.state.data))
    event.preventDefault();
  }
  removeTask(titleIndex, taskIndex) {
    const data1 = this.state.data[titleIndex].items;
    data1.splice(taskIndex, 1);
    this.setState({ data1 })
    localStorage.setItem('data',JSON.stringify(this.state.data))
  }
  addTask(titleIndex) {
    const data = this.state.data;
    const number = data[titleIndex].items.length + 1;
    data[titleIndex].items.push('new' + number);
    this.setState({ data });
    localStorage.setItem('data',JSON.stringify(this.state.data))
  }
  addTitle() {
    const data = this.state.data;
    const body = { title: 'title', items: ['new'] }
    data.push(body);
    this.setState({ data });
    localStorage.setItem('data',JSON.stringify(this.state.data))
  }
  removeTitle(titleIndex) {
    const data1 = this.state.data;
    data1.splice(titleIndex, 1);
    this.setState({ data1 });
    localStorage.setItem('data',JSON.stringify(this.state.data))
  }
  handleTask(titleIndex, taskIndex, event) {
    const data1 = this.state.data[titleIndex].items;
    const value = event.target.value;
    data1[taskIndex] = value;
    this.setState({ data1 });
    event.preventDefault();
    localStorage.setItem('data',JSON.stringify(this.state.data))
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
                  <div className="titlebar"><li>
                    <input className="" value={data.title} name="title" onChange={this.handleChange.bind(this, titleIndex)} id="inpt" />
                    <span className="minimize" aria-hieedn="true" onClick="">-</span>
                    <span className="r180 closetitle" aria-hidden="true" onClick={this.removeTitle.bind(this, titleIndex)}>x</span>
                  </li>
                  </div>
                  <div className="tasks">
                    {
                      data.items.map((item, taskIndex) => <li>
                        <input type="checkbox" value={item} />
                        <input className="" value={item} name="items" onChange={this.handleTask.bind(this, titleIndex, taskIndex)} id="inpt" />
                        <span className="r180 closetask" aria-hidden="true" onClick={this.removeTask.bind(this, titleIndex, taskIndex)}>x</span>
                      </li>)
                    }
                  </div>
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
