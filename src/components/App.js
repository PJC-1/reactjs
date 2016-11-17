import React from 'react';
import axios from 'axios';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages : [] }
  }

  componentWillMount() {
    axios.get('/data.json')
    .then(response => this.setState({ messages : response.data }));
  }

  render() {
    return (
      <div>
        <h1>My Messages</h1>
        {console.log(this.state.messages)}
      </div>
    );
  }
}
