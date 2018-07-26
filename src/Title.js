import React, { Component } from 'react';
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.data, titleIndex: this.props.titleIndex }        
    }
    removeTitle(titleIndex) {
        const data1 = this.state.data;
        data1.splice(titleIndex, 1);
        this.setState({ data1 });
        this.props.callBack(this.state.data);
        localStorage.setItem('data', JSON.stringify(this.state.data));
    }
    minimiseTask(titleIndex) {
        const data1 = this.state.data;
        data1[titleIndex].display = false;
        this.setState({ data1 });
        this.props.callBack(this.state.data);
    }
    maximiseTask(titleIndex) {
        const data1 = this.state.data;
        data1[titleIndex].display = true;
        this.setState({ data1 });
        this.props.callBack(this.state.data);
    }
    handleChange(titleIndex, event) {
        const data1 = this.state.data;
        data1[titleIndex].title = event.target.value;
        this.setState({ data1 });
        localStorage.setItem('data', JSON.stringify(this.state.data));
        this.props.callBack(this.state.data);
    }
    render() {
        return (
            <div className="titlebar">{
               
            }
                <li>
                    <input className="" value={this.props.title} name="title" onChange={this.handleChange.bind(this, this.state.titleIndex)} id="inpt" />
                    <span className="maximise" aria-hidden="true" onClick={this.maximiseTask.bind(this, this.state.titleIndex)} data-toggle="tooltip" title="Maximize">+</span>
                    <span className="minimize" aria-hidden="true" onClick={this.minimiseTask.bind(this, this.state.titleIndex)} data-toggle="tooltip" title="Minimize">-</span>
                    <span className="r180 closetitle" aria-hidden="true" onClick={this.removeTitle.bind(this, this.state.titleIndex)} data-toggle="tooltip" title="Remove Check List">x</span>
                </li>
            </div>
        );
    }

};
export default Title;