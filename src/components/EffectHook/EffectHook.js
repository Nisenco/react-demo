import React,{useState,useEffect} from 'react';
/***
 * 在React 中有两种常见的副作用操作： 需要清除的和不需要清除的副作用
 *
 * 无需清除的副作用：（发送网络请求，手动更新DOM，记录日志等）
 *
 *useEffect 做了什么？
 * 通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。
 * React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。
 * 在这个 effect 中，我们设置了 document 的 title 属性，不过我们也可以执行数据获取或调用其他命令式的 API。

 为什么在组件内部调用 useEffect？
 将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。
 我们不需要特殊的 API 来读取它 —— 它已经保存函数作用域中。
 Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。

 useEffect 会在每次渲染后都执行吗？
 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。
 （我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。
 React 保证了每次运行 effect 的时，DOM 都已经更新完毕

 为什么要在 effect 中返回一个函数？
 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。
 如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

 React 何时清除 effect？
 React 会在组件卸载的时候执行清除操作。正如之前学到的，effect 在每次渲染的时候都会执行。
 这就是为什么 React 会在执行当前 effect 之前对上一个 effect 进行清除。
 *
 */
const Example = (props)=>{
    const [count ,setCount] = useState(0);
    useEffect(()=>{
       document.title = count.toString();
    });
    return <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    </div>
};
export default Example
