import React from 'react';
import MessageItem from './MessageItem';

const MessageList = (props) => {
  const messages = props.messages.map(message => {
    return (
      <MessageItem key={message.no} message={message}/>
    );
  });
  return (
    <div>
        {messages}
    </div>
  );
}

export default MessageList;
