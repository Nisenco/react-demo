import { createStore,combineReducers} from 'redux';
import todos from './todoReducer';
const indexReducers = combineReducers({todos});
const Store = createStore(indexReducers);

export default Store;
