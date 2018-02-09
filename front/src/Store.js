import { extendObservable } from 'mobx';
import openSocket from 'socket.io-client';
import { setTimeout, clearTimeout } from 'timers';


class MsgStore {

    constructor() {
        extendObservable(this, {
            messages: [],
        });

        this.socket = openSocket('http://localhost:80');

        this.socket.on("newMessage", (data) => {
            this.messages.push({ type: "other", data: data });
        })
    }

    sendMessage(txt) {
        this.messages.push({ type: "me", data: txt })
        this.socket.emit("newMessage", txt)
    }
}



const MsgStore = new MsgStore();

export default MsgStore;