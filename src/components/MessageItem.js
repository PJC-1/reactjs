import React from 'react';

const MessageItem = (props) => {
  return (
    <div className="messageItem">
      <span> <img src={ props.message.imageUrl } /> </span>
      <span className="personName">
      { props.message.name }
      </span>
      <br />
      <span className="latestMessage">{ props.message.bio }</span>
      <hr />
    </div>
  );
}

export default MessageItem;
