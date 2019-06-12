import {createStore,combineReducers} from 'redux';
import {reducer as todoReducer}from 'components/todos';
// import {reducer as filterReducer}from 'components/filter';

// 通過 redux 中的combineReducers 函數 把多個只針對局部狀態改變的reducer 合併為一個曹總整個狀態樹的 '大的' reducer 。
const reducer = combineReducers({
    todos:todoReducer,
    // filter:filterReducer
})
export default createStore(reducer);
