import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    constructor(props) {
        super(props);
        this.addClass = this.addClass.bind(this);
    }

    addClass() {
        return "Message " + this.props.type;
    }



    render() {
        return (
            <div className="MessageContainer">
                <div className={this.addClass()}>
                    {this.props.data}
                </div>
                <div className="clearFix"></div>
            </div>
        );
    }
}

export default Message;
