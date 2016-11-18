import React from 'react';

const MessageList = (props) => {

  const chicken = props.messages;
  console.log(chicken);
  return (
    <div>
        <h1>Messagelist component!</h1>
    </div>
  );
}

export default MessageList;
