import React, { Component } from 'react';
import NavigationBar from '../common/navigationBar';

/**
 * class
 * @class
 */
class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
