import { extendObservable } from 'mobx';
import openSocket from 'socket.io-client';


class MsgStore {

    constructor() {
        extendObservable(this, {
            messages: [],
        });

        this.socket = openSocket('http://localhost:80');

        this.socket.on("newMessage", (data) => {
            console.log("got message:",data)
            this.messages.push({ type: "other", data: data });
        })
    }

    sendMessage(txt) {
        this.messages.push({ type: "me", data: txt })
        this.socket.emit("newMessage", txt)
    }
}



const store = new MsgStore();

export default store;