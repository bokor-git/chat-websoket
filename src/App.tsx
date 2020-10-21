import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import style from "./chat.module.scss"
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
    const [name, setName] = useState("")
    return (
        <div className={style.app}>
            <div className={style.chat}
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
                {messages.map((m: any) => <div className={style.message_block} key={m.id}>
                    <span className={style.name}>{m.user.name}:</span>
                    <span className={style.message}>{m.message}</span>

                    </div>)}
                {typingUsers.map((m: any) => <div key={m.id}><b>{m.name}</b>...</div>)}

                <div ref={massagesAnchorRef}></div>

            </div>
            <button className={style.send_name} onClick={() => {
                dispatch(setClientName(name))
            }}>Use name:</button>
            <input placeholder={"Your name..."} className={style.use_name} value={name} onChange={event => setName(event.currentTarget.value)} type="text"/>
            <button className={style.send_text} onClick={() => {
                dispatch(sendMassage(message));
                setMessage("")
            }}>Send message</button>
            <textarea placeholder={"Your message..."} className={style.input_text} onKeyPress={() => {
                dispatch(typeMessage())
            }} value={message} onChange={event => setMessage(event.currentTarget.value)}></textarea>

        </div>
    );
}


export default App;
