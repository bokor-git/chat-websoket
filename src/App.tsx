import React, {useEffect, useRef, useState} from 'react';
import './App.css';

import {useDispatch, useSelector} from "react-redux"
import {createConnections, destroyConnections, sendMassage, setClientName, typeMessage} from "./chat-reducer";
import {AppStateType} from "./index";

//const socket = io("http://localhost:3009/")


function App() {

    const messages = useSelector((state: any) => state.chat.messages)
    const typingUsers = useSelector((state: any) => state.chat.typingUsers)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createConnections());
        return () => {
            dispatch(destroyConnections())
        }
    }, [])
    const massagesAnchorRef = useRef<HTMLDivElement>(null)
    //const [messages, setMessages] = useState<Array<any>>([])
    const [isAutoScrollActive, setIsAutoScrollActive] = useState(true)
    const [lastScrollTop, setLastScrollTop] = useState(0)

    useEffect(() => {
        if (isAutoScrollActive) {
            massagesAnchorRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [messages])
    const [message, setMessage] = useState("")
    const [name, setName] = useState("Bohdan")
    return (
        <div className="App">
            <div style={{
                border: "2px solid black",
                padding: "15px",
                height: "300px",
                width: "250px",
                overflowY: 'scroll'
            }}
                 onScroll={(event) => {
                     let element = event.currentTarget
                     let maxScrollPosition = element.scrollHeight - element.clientHeight
                     if (element.scrollTop > lastScrollTop && Math.abs(maxScrollPosition - element.scrollTop) < 15) {
                         setIsAutoScrollActive(true)
                     } else {
                         setIsAutoScrollActive(false)
                     }
                     setLastScrollTop(event.currentTarget.scrollTop)
                 }}>
                {messages.map((m: any) => <div key={m.id}><b>{m.user.name}</b>:{m.message}</div>)}
                {typingUsers.map((m: any) => <div key={m.id}><b>{m.name}</b>...</div>)}

                <div ref={massagesAnchorRef}></div>
            </div>
            <input value={name} onChange={event => setName(event.currentTarget.value)} type="text"/>
            <button onClick={() => {
                dispatch(setClientName(name))
            }}>Send name
            </button>
            <textarea onKeyPress={() => {
                dispatch(typeMessage())
            }} value={message} onChange={event => setMessage(event.currentTarget.value)}></textarea>
            <button onClick={() => {
                dispatch(sendMassage(message));
                setMessage("")
            }}>Send message
            </button>
        </div>
    );
}


export default App;
