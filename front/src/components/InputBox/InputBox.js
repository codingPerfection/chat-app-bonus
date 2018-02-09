import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component {

    constructor(props) {
        super(props);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyDown() {
        //on enter send message
        if (e.keyCode == 13) {
            //call store and send command
        }
    }

    render() {
        return (
            <div className="InputBox">
                <textarea ref={(ref) => { this.elem = ref }}
                    onKeyDown={this.onKeyDown}
                >

                </textarea>
            </div >
        );
    }
}

export default InputBox;
