// import React,{PureComponent}from 'react';
import React,{ useState,useEffect  }from 'react';
import {Button} from "antd";
/**
 * Hook 是React 16.8.0新增特性，它可以让你不编写class的情况下使用state 以及其他的React 特性
 * useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
 *
 * // 声明多个 state 变量！
 * State Hook:
 * const [age, setAge] = useState(42);
 * const [fruit, setFruit] = useState('banana');
 * const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
 *
 * Effect Hook
 *  useEffect 就是一个Effect Hook ，给函数组件添加了操作副作用的能力。
 *  它跟class 组件中的componentDidMount,componentDidUpdate和componentWillUnmount具有相同的用途，只不过是被合并成一个API
 *  当调用useEffect 时，就是告诉React 完成DOM更改后运行你的 “副作用函数”。
 *  由于副作用函数是在组件内部生命，所以他们可以访问组件的props 和 state。默认情况下，React 会在每次渲染后调用副作用函数--包括第一次渲染的时候
 *
 *
 * Hook 使用规则：
 *  1 只能在函数的最外层 调用hook，不要在循环，条件判断或者子函数中调用
 *  2 只能在React 的函数组件中调用Hook，不要在其他的javascript 函数中调用。（还有一个地方可以调用Hook--就是在自定义的Hook中）
 *
 *
 * 自定义Hook
 *

 */

function Hooks (){
    const [count,setCount] = useState(0);
    // 相当于使用 componentDidMount 和 componentDidUpdate
    useEffect(()=>{
        // 使用浏览器API 更新页面标题
        document.title = `${count} &nbsb; times` ;
        return ()=>{
            document.title = `count is destoried` ;
        }
    });
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

