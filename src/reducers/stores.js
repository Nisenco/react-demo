import { createStore,combineReducers} from 'redux';
import todos from './todoReducer';
import visibilityFilter  from './filterReducer';
const indexReducers = combineReducers({todos,visibilityFilter});
const Store = createStore(indexReducers);
export default Store;
