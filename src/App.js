import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
// import Test from 'components/test/index.js';
// import ClickCounter from 'components/ClickCounte/ClickCounte.js';
import BackTop from 'components/BackTop/BackTop.js'; // 回到顶点
import MultiSelect from 'components/MultiSelect/MultiSelect.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Test/>*/}
        {/*<ClickCounter />*/}
        <BackTop />
        <div style={{padding:'100px'}}>
          <MultiSelect title="趋势类型"/>
        </div>

      </div>
    );
  }
}

export default App;
