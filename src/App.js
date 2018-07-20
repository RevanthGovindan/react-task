import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="btn btn-primary">Add New</button>
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
    this.show = this.show.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(i, event) {
    const data = this.state.data;
    const name = event.target.name;
    if (name === "title") {
      data[i].title = event.target.value;
    }
    this.setState({ data })
    event.preventDefault();
  }
  show() {
    console.log(this.state.data);
  }
  removeTask(titleIndex, taskIndex) {
    const data = this.state.data[titleIndex].items;
    data.splice(taskIndex, 1);
    this.setState({ data })
  }
  addTask(titleIndex){
    const data = this.state.data;
    data[titleIndex].items.push('new task');
    this.setState({data});
  }
  render() {
    return (
      <div className="box">
        {
          this.state.data.map(function (data, i) {
            return (<div><div>
              <input value={data.title} name="title"  id="inpt" />
              {
                data.items.map(function (item, j) {
                  return (<h4><input type="checkbox" value={item} />{item}<button type="button" className="close" aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                  </button></h4>)
                })
              }
              <button onClick={this.addTask.bind(this,i)}>Add</button>
              </div>
            </div>)
          })
        }
        <button onClick={this.show}>click</button>
        {/* {
          this.state.data.map((dat, i) => 
            <div>
              <div className="datas">
                <input value={dat.title} name="title" onChange={this.handleChange.bind(this, i)} id="inpt" />
                {dat.items.map((itm,j) => itm!==undefined &&<h4>
                  <input type="checkbox" value={itm} />{itm}<button type="button" className="close" aria-label="Close" onClick={this.removeTask.bind(this,i,j)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </h4>)}
              </div>
            </div>
          )
        }
        <button onClick={this.show}>click</button> */}
      </div>
    );
  }
}
export default App;
