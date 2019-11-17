import React, { Component } from 'react';
// import { createStore,combineReducers} from 'redux';
// import { Provider } from 'react-redux';
import Ckeditor from 'containers/Ckeditor';
import './App.css';
import 'antd/dist/antd.css';
// import Hooks from "./components/Hooks/Hooks";
import Routes from 'routes';

// const Store = createStore();
// Store.subscribe(() => {
//   console.log(Store.getState(), 'changeState');
// });

// const indexReducers = combineReducers({todos,visibilityFilter});
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        {/* <Provider store = {Store}> */}
          <Ckeditor />
        {/* </Provider> */}
        <Routes />
      </div>
    );
  }
}

export default App;
