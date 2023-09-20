"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link';

export default function Home() {
    const [data,setData] = useState("");
    const inputref:any = useRef("");

    const handleEnter = (e:any) =>{
        
        if(e.keyCode == 13){
            setData(inputref.current.value);
            console.log(inputref.current.value);
          }
          return;
    }


  return (
    <>
        <div className='wrapper'>
            <div className="input">
                <input ref={inputref} onKeyDown={handleEnter}></input>
            </div>
            <button>
                <Link href={{pathname:"/chat",query:{username:data}}}>GO</Link>
            </button>
            
        </div>
    </>
  )
}

