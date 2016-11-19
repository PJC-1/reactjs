import React from 'react';

const ViewMessagesButton = (props) => {
  return (
    <div className="text-center">
      <a onClick={props.getMessages} className="btn btn-md btn-info">
        Get Messages
      </a>
    </div>
  );
}

export default ViewMessagesButton
