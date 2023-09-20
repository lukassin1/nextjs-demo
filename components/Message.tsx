import React from 'react'
import { useSearchParams } from 'next/navigation'

function Message(message: any ):React.JSX.Element {
  const searchParams = useSearchParams()
  console.log(searchParams.get('username'))
  const user = searchParams.get("username"); 
  return (
    
    <div className={"message"}>{user + ": "+ message.message} </div>
  )
}

export default Message