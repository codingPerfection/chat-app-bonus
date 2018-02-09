import React, { Component } from 'react';
import './Message.css';
import MessageData from './MessageData/MessageData';
import ReactCssTransition from 'react-addons-css-transition-group';

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
                <ReactCssTransition
                    transitionName="slideIn"
                    transitionAppearTimeout={1000}
                    transitionAppear={true}
                    transitionEnter={false}
                    transitionLeave={false}
                >
                    <div className={this.addClass()}>
                        <MessageData>
                            {this.props.data}
                        </MessageData>
                    </div>
                </ReactCssTransition>
                <div className="clearFix"></div>
            </div>
        );
    }
}

export default Message;
