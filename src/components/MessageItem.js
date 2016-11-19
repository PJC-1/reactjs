import React from 'react';

const MessageItem = (props) => {
  return (
    <div className="messageItem">
      <span> <img src={ props.message.imageUrl } /> </span>
      <span className="personName">
      { props.message.firstname + " " + props.message.lastname }
      </span>
      <br />
      <span className="latestMessage">{ props.message.message }</span>
      <hr />
    </div>
  );
}

export default MessageItem;
