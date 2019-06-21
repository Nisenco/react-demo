import {connect} from "react-redux";
import List from './list';
import {toggleTodo} from 'appReducers/actions/todoAction.js';

const getVisibleTodoList = (todos,filter = "SHOW_ALL")=>{
    switch (filter){
        case 'SHOW_ALL':
            return todos;
        default:
            return todos;
    }
};
const mapStateToProps = (state)=>{
    return {
        todos:getVisibleTodoList(state.todos,state.visibilityFilter),
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        onTodoClick: (id) => {
            console.log(id,'9999');
            dispatch(toggleTodo(id));
        },
    }
};
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
export default VisibleTodoList;
