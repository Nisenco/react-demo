import React from 'react';

const List = (props)=>{
    const {todos,onTodoClick} = props;
    return <ul>
        {
            todos.map(item=>{
                return <li style={{color:`${item.completed?'red':'#fff'}`,cursor:'pointer'}} onClick={()=>onTodoClick(item.id)} key={item.id}> {item.text}</li>
            })
        }
    </ul>
};
export default List;
