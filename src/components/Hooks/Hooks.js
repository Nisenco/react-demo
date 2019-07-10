// import React,{PureComponent}from 'react';
import React,{ useState }from 'react';
import {Button} from "antd";
/**
 * Hook 是React 16.8.0新增特性，它可以让你不编写class的情况下使用state 以及其他的React 特性
 */
// class Hooks extends PureComponent {
//
// }

function Hooks (){
    const [count,setCount] = useState(0);
    return (<div>
        <p style={{color:'#fff'}}>you click {count} times</p>
        <Button onClick={()=>{
            setCount(count+1)
        }}>UP+1</Button>
        <Button onClick={()=>{
            setCount(count-1)
        }}>DOWN+1</Button>
    </div>)
}
export default Hooks

