import React, { Component } from 'react';
import './MessageData.css';

class MessageData extends Component {

    constructor(props) {
        super(props);
    }

    parseData(data) {
        if (data === "(smile)") {
            return <i className="sprite sprite-smile" ></i>
        } else if (data === "(wink)") {
            return <i className="sprite sprite-wink" ></i>
        } else {
            return data;
        }
    }



    render() {
        return (
            <div className="MessageData" >
                {this.parseData(this.props.children)}
            </div >
        )
    }
}

export default MessageData;
