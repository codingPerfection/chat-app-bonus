import React, { Component } from 'react';
import './InputBox.css';
import MsgStore from './../../Store'


class InputBox extends Component {

    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        //on enter send command
        if (e.keyCode === 13) {
            e.preventDefault();
            //call store and send command
            MsgStore.sendCommand(this.elem.value);
            this.elem.value = "";
        }else{
            MsgStore.sendTyping();
        }
    }

    render() {
        return (
            <div className="InputBox">
                <textarea ref={(ref) => { this.elem = ref }}
                    onKeyDown={this.onKeyDown}
                    placeholder="Type in new message... (enter sends it)"
                >
                </textarea>
            </div >
        );
    }
}

export default InputBox;
