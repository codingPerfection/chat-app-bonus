import React, { Component } from 'react';
import { observer } from 'mobx-react'
import MsgStore from './../../Store';
import Message from './Message/Message';

class MessageBox extends Component {




    render() {
        return (
            <div className="MessageBox">
                {
                    MsgStore.messages.map((m, index) => {
                        return <Message {...m} key={index} />
                    })
                }
            </div>
        );
    }
}

export default observer(MessageBox);
