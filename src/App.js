import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
// import Test from './test/index.js';
import ClickCounter from 'components/ClickCounte/ClickCounte.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Test/>*/}
        <ClickCounter />
      </div>
    );
  }
}

export default App;
