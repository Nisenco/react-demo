import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import TodoApp from 'components/TodoApp.js';
class App extends Component {
  render() {
    return (
      <div className="App">
          <div style={{padding:'100px'}}>
              <Provider>
                  <TodoApp />
              </Provider>
          </div>
      </div>
    );
  }
}

export default App;
