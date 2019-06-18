import {connect} from "react-redux";
import List from './list';
import {switchCase} from "@babel/types";

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
        todos:getVisibleTodoList(state.todos),
    }
};
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id));
//         },
//     }
// };
const VisibleTodoList = connect(
    mapStateToProps,
    // mapDispatchToProps
)(List);
export default VisibleTodoList;
