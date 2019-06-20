import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO}from './actionTypes/todoActionTypes';
const todos = (state= [],action)=>{
    console.log(action,'++avtion++');
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
        case TOGGLE_TODO:
            return state.map(item=>{
                if(action.id === item.id){
                    item.completed = !item.completed
                }
                return item;
            });
        default:
            return state;
    }
};
export default todos;
