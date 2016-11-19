import React from 'react';
import axios from 'axios';
import MessageList from './MessageList';
import ViewMessagesButton from './ViewMessagesButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages : [] }
    this.getMessages = this.getMessages.bind(this);
  }

  getMessages() {
    axios.get('data.json')
    .then(response => this.setState({ messages : response.data }));
  }

  render() {
    var button;

    if(this.state.messages.length > 1) {
      button = null
    } else {
      button = <ViewMessagesButton getMessages={this.getMessages}/>
    }

    return (
      <div className="app">
        <h1>My Pokemon Sun and Moon Team</h1>
        <br />
        <MessageList messages={this.state.messages}/>
        {button}
      </div>
    );
  }// render
}
