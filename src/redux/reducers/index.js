import {combineReducers} from 'redux';
import todos from './todoReducer';
const Reducers = combineReducers({
    todos
});
export default Reducers;
