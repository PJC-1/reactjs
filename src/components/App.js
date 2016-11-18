import React from 'react';
import axios from 'axios';
import MessageList from './MessageList';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages : [] }
  }

  componentWillMount() {
    axios.get('data.json')
    .then(response => this.setState({ messages : response.data }));
  }

  render() {
    return (
      <div className="app">
        <h1>My Messages</h1>
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}
