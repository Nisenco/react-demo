import React,{ useState ,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';
import './index.css';


function Hooks(props){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    document.title = `you clicked ${count} times`;
  })
  return (
    <div>
      <p>You clicked {count} times</p>

      
      <Button type='primary' onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  )
}
export default withRouter(Hooks);