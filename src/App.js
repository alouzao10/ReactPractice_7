import React, { Component } from 'react';

import Hello from './Components/Hello';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello Mundo...</h1>
        <hr />
        <h2>
          {this.props.txt} + {this.props.num}
        </h2>
        <Hello />
      </React.Fragment>
    );
  }
}

export default App;
