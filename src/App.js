import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import TodoList from 'containers/TodoList.js';
import VisibleTodoList from 'containers/visibleTodoList';
import BrandsChosen from 'components/BrandsChosen/BrandsChosen.jsx';
import Store from './reducers/stores.js';
import Hooks from "./components/Hooks/Hooks";
// import CustomMetrics from 'components/CustomMetrics/CustomMetrics.js';

// const list = [
//     {title:'可对比指标',name: 'contrast',num:4,data:[{label:'总声量',value:'voice1'},{label:'行业占比',value:'voice2'},{label:'传播指数',value:'voice3'},{label:'提及话题数',value:'voice4'},{label:'话题参与数',value:'voice5'},{label:'美誉指数',value:'voice6'}]},
//     {title:'非对比指标',name: 'noncontrast',num:2,data:[{label:'微博账号',value:'voice9'},{label:'粉丝数',value:'voice8'},{label:'人气指数',value:'voice7'}]}
// ];
Store.subscribe(() => {
    console.log(Store.getState(), 'changeState');
});

class App extends Component {
    constructor(props) {
        super(props);
    }

    brandsChosen = (data) => {
        console.log(data);
    };

    render() {
        return (
            <div className="App">
                <div style={{padding: '100px'}}>
                    {/*<CustomMetrics title={"自定义指标"} list = {list}/>*/}
                    <BrandsChosen url={`*****`} onChange={this.brandsChosen}/>
                    <Hooks/>
                    <div style={{marginTop: 20}}>
                        <Provider store={Store}>
                            <TodoList/>
                            <VisibleTodoList/>
                        </Provider>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
