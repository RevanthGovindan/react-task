import React, { Component } from 'react';
import './CheckBox.css';
class Task extends Component {
    constructor(props) {
        super(props)
        this.state = { items: this.props.items, titleIndex: this.props.titleIndex, data: this.props.data }
    }
    handleTask(titleIndex, taskIndex, event) {
        const data1 = this.state.data[titleIndex].items;
        const value = event.target.value;
        data1[taskIndex] = value;
        this.setState({ data1 });
        event.preventDefault();
        localStorage.setItem('data', JSON.stringify(this.state.data))
    }
    removeTask(titleIndex, taskIndex) {
        const data1 = this.state.data[titleIndex].items;
        data1.splice(taskIndex, 1);
        this.setState({ data1 })
        localStorage.setItem('data', JSON.stringify(this.state.data))
    }
    render() {
        return (
            <div>{

                this.state.data[this.state.titleIndex].items.map((item, taskIndex) => <li key={taskIndex}>
                    <input type="checkbox" value={item} />
                    <input className="" value={item} name="items" onChange={this.handleTask.bind(this, this.state.titleIndex, taskIndex)} id="inpt" />
                    <span className="r180 closetask" aria-hidden="true" onClick={this.removeTask.bind(this, this.state.titleIndex, taskIndex)} data-toggle="tooltip" title="Remove Task">x</span>
                </li>)
            }
            </div>
        );
    }
}
export default Task;