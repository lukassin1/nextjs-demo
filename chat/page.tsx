
"use client";

import { useState } from 'react'
import { useRef } from 'react';

import Message from '../components/Message';



export default function Chat() {
  const [messages,setMessages] = useState([]);

  
  const inputref = useRef("");
 

  const handleEnter = (e) =>{
    if(e.keyCode == 13){
      handleAddMessage();
    }
    return;
  }
  const handleAddMessage = ()=>{
    const message = inputref.current.value;
    inputref.current.value = "";
    setMessages( prevMessages =>{
      return [...prevMessages, {id: Date.now(),message: message}]
  })}

 
  
  return (  
    <>
     
      <div className='wrapper'>
      <div className='input'>
      <input  type="text" ref={inputref} onKeyDown={handleEnter} />
      </div>
        {messages.map(mess =>{
          return <Message key={mess.id} message={mess.message}/>
        })}
      </div>
      
      
    </>
  )}
