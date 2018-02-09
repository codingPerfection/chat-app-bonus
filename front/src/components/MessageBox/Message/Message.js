import React, { Component } from 'react';
import './Message.css';
import MessageData from './MessageData/MessageData';

class Message extends Component {

    constructor(props) {
        super(props);
        this.addClass = this.addClass.bind(this);
    }

    addClass() {
        let think = this.props.think ? " think " : " ";
        return "Message " + this.props.type + think;
    }



    render() {
        return (
            <div className="MessageContainer">
                <div className={this.addClass()}>
                    <MessageData>
                        {this.props.data}
                    </MessageData>
                </div>
                <div className="clearFix"></div>
            </div>
        );
    }
}

export default Message;
