import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO}from '../actionTypes/todoActionTypes';
let nextTodoId = 0;
export const addTodo = (text)=>({
    type:ADD_TODO,
    completed:false,
    id:nextTodoId++,
    text:text,
});

export const toggleTodo = (id)=>{
    console.log(id,'000');
    return{
        type: TOGGLE_TODO,
        id:id,
    }
};
export const removeTodo = (id)=>({
    type: REMOVE_TODO,
    id:id,
});

