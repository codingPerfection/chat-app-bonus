import React, { Component } from 'react';
import './MessageData.css';

class MessageData extends Component {

    constructor(props) {
        super(props)
        this.parseData = this.parseData.bind(this);
    }

    parseData() {
        let data = this.props.children;

        if (data === "(smile)") {
            return <i className="sprite sprite-smile" ></i>
        } else if (data === "(wink)") {
            return <i className="sprite sprite-wink" ></i>
            //this part should probabbly be done with less instead
        } else if (this.props.highlight) {
            return (<span className="highlight">
                {data}
                <span className="background"></span>
            </span>)
        } else {
            return data;
        }
    }



    render() {
        return (
            <div className="MessageData" >
                {this.parseData()}
            </div >
        )
    }
}

export default MessageData;
