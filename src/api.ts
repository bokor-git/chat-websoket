import io from "socket.io-client";

export const api = {
    socket: null as null | SocketIOClient.Socket,
    createConnection() {
        this.socket = io("https://chat-websoket-back.herokuapp.com/")
    },
    subscribe(initMassagesHandler: (messages: any) => void,
              newMessageSentHandler: (message: any) => void,
              userTypingHandler: (user: any) => void) {
        this.socket?.on("innit-massaged-published", initMassagesHandler)
        this.socket?.on('new-message-sent', newMessageSentHandler)
        this.socket?.on("user-typing", userTypingHandler)
    },
    destroyConnection() {
        this.socket?.disconnect();
        this.socket = null
    },
    sendName(name: string) {
        this.socket?.emit("client-name-sent", name);
    },
    sendNewMassage(message: any) {
        this.socket?.emit("client-message-sent", message);
    },
    typeMessage() {
        this.socket?.emit("client-typed");
    }
}