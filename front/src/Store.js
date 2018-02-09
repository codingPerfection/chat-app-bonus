import { extendObservable } from 'mobx';
import openSocket from 'socket.io-client';


class MsgStore {

    constructor() {
        extendObservable(this, {
            messages: [],
            nickname: null,
        });

        this.socket = openSocket('http://localhost:80');

        this.socket.on("newMessage", (data) => {
            this.messages.push({ type: "other", data: data });
        });

        this.socket.on("nickname", (data) => {
            this.nickname = data;
        })
    }

    sendCommand(command) {

        let stripCommand = (strip) => {
            console.log(command.replace(strip, "").trim());
            return command.replace(strip, "").trim();
        }

        if (command.indexOf('/nickname') == 0) {
            this.socket.emit("nickname", stripCommand("/nickname"))
        } else {
            this.socket.emit("newMessage", command)
        }
    }

    sendMessage(txt) {
        this.messages.push({ type: "me", data: txt })
        this.socket.emit("newMessage", txt)
    }
}



const store = new MsgStore();

export default store;