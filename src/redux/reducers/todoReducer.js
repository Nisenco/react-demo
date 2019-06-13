import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO}from '../actionTypes/todoActionTypes';
const todos = (state= [],action)=>{
    console.log(action,'todos++avtion++');
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
};
export default todos;
