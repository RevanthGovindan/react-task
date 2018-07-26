import React, { Component } from 'react';
import './CheckBox.css';
import Task from './Task.js';
import Title from './Title.js';
class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.data }
        this.childChange = this.childChange.bind(this);
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
        const body = { title: 'title', items: ['new'], display: true }
        data.push(body);
        this.setState({ data });
        localStorage.setItem('data', JSON.stringify(this.state.data))
    }
    childChange(newState) {

        this.setState({ data: newState });
        
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary btn-lg" data-toggle="tooltip" title="Add Check List" onClick={this.addTitle.bind(this)}>Add New</button>
                <div className="box" id="myDIV">
                    {
                        this.state.data.map((data, titleIndex) =>
                            <div className="item" key={titleIndex}>
                                <div className="datas">
                                    <Title data={this.state.data} titleIndex={titleIndex} title={this.state.data[titleIndex].title} callBack={(newState) => this.childChange(newState)} />
                                    <div className="innerbox">
                                        <div className="tasks" >
                                            {data.display ? <Task items={data.items} titleIndex={titleIndex} data={this.state.data} /> : "Hidden"}
                                        </div>
                                    </div>
                                    <button className="btn btn-danger btn-lg" onClick={this.addTask.bind(this, titleIndex)}>
                                        <span className="glyphicon glyphicon-plus"></span></button>
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