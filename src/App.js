import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="btn btn-primary">Add New</button>
        <div className="checklist">
          <List/>
        </div>
      </div>
    );
  }
}
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { data:[{ name: "qwe", age: 10 }, { name: "rev", age: 21 }, { name: "saran", age: 23 }]};
    this.show = this.show.bind(this);
   
  }
  handleChange(i,event){
    const items = this.state.data;
    const n=event.target.name;    
    if(n==="name1")
    {
      items[i].name=event.target.value;
    }
    else if(n==="age"){
      items[i].age=event.target.value;
    }
    this.setState({items})
    event.preventDefault();
  }
  show(){
    console.log(this.state.data);
    }
  render() {
    return (
      <div className="box">
      {

        this.state.data.map((dat,i)=><div className="rounded item">
                                        <input value={dat.name} name="name1" onChange={this.handleChange.bind(this,i)} id="inpt"/>
                              <br></br><input value={dat.age} name="age" onChange={this.handleChange.bind(this,i)}  id="inpt"/></div>)
                              
      }
      <button onClick={this.show}>click</button>
      </div>
    );
  }
}
export default App;
