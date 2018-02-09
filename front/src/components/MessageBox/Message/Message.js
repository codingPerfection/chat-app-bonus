import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="MessageContainer">
                <div className="Message">
                    {this.props.data}
                </div>
            </div>
        );
    }
}

export default Message;
