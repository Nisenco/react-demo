import React from 'react';
const List = ({todos})=>{
    return <ul>
        {
            todos.map(item=>{
                return <li style={{color:'#fff'}} key={item.id}> {item.text}</li>
            })
        }
    </ul>
};
export default List;
