import React, { Component } from 'react';
import './Message.css';
import MessageData from './MessageData/MessageData';
import ReactCssTransition from 'react-addons-css-transition-group';
import { observer } from 'mobx-react';

class Message extends Component {

    constructor(props) {
        super(props);
        this.addClass = this.addClass.bind(this);
    }

    addClass() {
        let fade = this.props.fade ? " fade " : " ";
        let think = this.props.think ? " think " : " ";
        return "Message " + this.props.type + think + fade;
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
                        <MessageData highlight={this.props.highlight}>
                            {this.props.data}
                        </MessageData>
                    </div>
                </ReactCssTransition>
                <div className="clearFix"></div>
            </div>
        );
    }
}

export default observer(Message);
