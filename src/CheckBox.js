import React, { Component } from 'react';
import './CheckBox.css';
import Task from './Task.js';
class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.data,isHidden:true,indexportion:[] }
    }
    handleChange(titleIndex, event) {
        const data = this.state.data;
        const name = event.target.name;
        if (name === "title") {
            data[titleIndex].title = event.target.value;
        }
        this.setState({ data });
        localStorage.setItem('data', JSON.stringify(this.state.data))
        event.preventDefault();
    }
    addTask(titleIndex) {
        const data = this.state.data;
        const number = data[titleIndex].items.length + 1;
        data[titleIndex].items.push('new' + number);
        this.setState({ data });
        localStorage.setItem('data', JSON.stringify(this.state.data))
    }
    addTitle() {
        const data = this.state.data;
        const body = { title: 'title', items: ['new'],display:true }
        data.push(body);
        this.setState({ data });
        localStorage.setItem('data', JSON.stringify(this.state.data))
    }
    removeTitle(titleIndex) {
        const data1 = this.state.data;
        data1.splice(titleIndex, 1);
        this.setState({ data1 });
        localStorage.setItem('data', JSON.stringify(this.state.data))
    }
    minimiseTask(titleIndex) {
        const data1 = this.state.data;
        data1[titleIndex].display=false;
        this.setState({data1});
    }
    maximiseTask(titleIndex) {
        const data1 = this.state.data;
        data1[titleIndex].display=true;
        this.setState({data1});
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" data-toggle="tooltip" title="Add Check List" onClick={this.addTitle.bind(this)}>Add New</button>
                <div className="box" id="myDIV">
                    {
                        this.state.data.map((data, titleIndex) =>
                            <div className="item" key={titleIndex}>
                                <div className="datas">
                                    <div className="titlebar"><li>
                                        <input className="" value={data.title} name="title" onChange={this.handleChange.bind(this, titleIndex)} id="inpt" />
                                        <span className="maximise" aria-hidden="true" onClick={this.maximiseTask.bind(this, titleIndex)} data-toggle="tooltip" title="Maximize">+</span>
                                        <span className="minimize" aria-hidden="true" onClick={this.minimiseTask.bind(this, titleIndex)} data-toggle="tooltip" title="Minimize">-</span>
                                        <span className="r180 closetitle" aria-hidden="true" onClick={this.removeTitle.bind(this, titleIndex)} data-toggle="tooltip" title="Remove Check List">x</span>
                                    </li>
                                    </div>
                                    <div className="innerbox">
                                        <div className="tasks" >
                                         
                                         {data.display?<Task items={data.items} titleIndex={titleIndex} data={this.state.data}/>:""}                                 
                                        </div>
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
export default CheckBox;