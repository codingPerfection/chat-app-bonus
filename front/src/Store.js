import { extendObservable } from 'mobx';
import openSocket from 'socket.io-client';


class MsgStore {

    constructor() {
        extendObservable(this, {
            messages: [],
            nickname: null,
        });

        this.socket = openSocket('http://localhost:80');

        this.socket.on("newMessage", (data, think) => {
            this.messages.push({ type: "other", data: data, think: think });
        });

        this.socket.on("nickname", (data) => {
            this.nickname = data;
        })

        this.socket.on("oops", () => {
            this.removeLastMessage("other");
        })
    }

    removeLastMessage(type) {
        for (let i = this.messages.length - 1; i >= 0; i--) {
            if (this.messages[i].type == type) {
                this.messages.splice(i, 1);
                break;
            }
        }
    }

    sendCommand(command) {

        let stripCommand = (strip) => {
            return command.replace(strip, "").trim();
        }

        if (command.indexOf('/nickname') === 0) {
            this.socket.emit("nickname", stripCommand("/nickname"))
        } else if (command.indexOf('/oops') === 0) {
            this.removeLastMessage("me");
            this.socket.emit("oops")
        } else if (command.indexOf('/think') === 0) {
            this.sendMessage(stripCommand("/think"), true);
        } else {
            this.sendMessage(command)
        }
    }

    sendMessage(txt, think = false) {
        this.messages.push({ type: "me", data: txt, think: think })
        this.socket.emit("newMessage", txt, think)
    }
}



const store = new MsgStore();

export default store;