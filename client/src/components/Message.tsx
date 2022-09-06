import React from 'react'

const Message: React.FC<MessageProps> = ({message}) => {
  return (
    <div>
        <p>{message.user}</p>
        <p>{message.body}</p>
    </div>
  )
}

export default Message