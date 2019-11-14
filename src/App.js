import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import TodoList from 'containers/TodoList.js';
import VisibleTodoList from 'containers/visibleTodoList';
import Ckeditor from 'containers/Ckeditor';
import Store from './reducers/stores.js';
// import Hooks from "./components/Hooks/Hooks";
// import CustomMetrics from 'components/CustomMetrics/CustomMetrics.js';

Store.subscribe(() => {
  console.log(Store.getState(), 'changeState');
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Provider store={Store}>
          <Ckeditor />
          {/* <TodoList />
          <VisibleTodoList /> */}
        </Provider>
      </div>
    );
  }
}

export default App;
