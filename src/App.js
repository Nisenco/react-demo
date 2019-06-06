import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
// import Test from 'components/test/index.js';
// import ClickCounter from 'components/ClickCounte/ClickCounte.js';
import BackTop from 'components/BackTop/BackTop.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Test/>*/}
        {/*<ClickCounter />*/}
        <BackTop />
      </div>
    );
  }
}

export default App;
