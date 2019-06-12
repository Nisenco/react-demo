import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO}from './actionTypes';
// reducer 是一個純函數 ，reducer 接收相應的state ，經過處理後返回新的state。且不允許返回  undefined 和null
export default (state =[],action)=>{
    switch(action.type){
        case ADD_TODO:{
            return [
                {
                    id:action.id,
                    text:action.text,
                    completed:false,
                },
                ...state
            ]
        }
        case TOGGLE_TODO:{
            return state.map(todoItem=>{
                if( todoItem.id === action.id){
                    return {...todoItem,completed: !todoItem.completed};
                }else{
                    return todoItem;
                }
            })
        }
        case REMOVE_TODO:{
            return state.filter(todoItem=>{
                return todoItem.id !== action.id
            })
        }
        default:{
            return state;
        }
    }
}
