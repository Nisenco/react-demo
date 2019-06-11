import React from 'react';
import {view as Todos} from  'components/todos';
import {view as Filter} from  'components/filter';
function TodoApp(){
    return (<div>
        <Todos/>
        <Filter/>
    </div>)
}
export default TodoApp;
