import {api} from "./api";

const initialState = {
    messages: [],
    typingUsers: []
}

export const chatReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "messages-received": {
            return {...state, messages: action.messages}
        }
        case "new-message-received": {
            return {
                ...state, messages: [...state.messages, action.message],
                typingUsers: state.typingUsers.filter((u: any) => u.id !== action.message.user.id)
            }
        }
        case "typing-user-added": {
            return {
                ...state,
                typingUsers: [...state.typingUsers.filter((u: any) => u.id !== action.user.id), action.user]
            }
        }
        default:
            return state

    }
}

const messageReceived = (messages: any) => ({type: "messages-received", messages})
const newMessageReceived = (message: any) => ({type: "new-message-received", message})
const typingUserAdded = (user: any) => ({type: "typing-user-added", user})


export const createConnections = () => (dispatch: any) => {
    api.createConnection()
    api.subscribe((messages: any) => {
            dispatch(messageReceived(messages))
        }, (message: any) => {
            dispatch(newMessageReceived(message))
        },
        (user: any) => dispatch(typingUserAdded(user)))
}

export const destroyConnections = () => (dispatch: any) => {
    api.destroyConnection()
}

export const typeMessage = () => (dispatch: any) => {
    api.typeMessage()
}


export const setClientName = (name: string) => (dispatch: any) => {
    api.sendName(name)
}

export const sendMassage = (message: string) => (dispatch: any) => {
    api.sendNewMassage(message)
}