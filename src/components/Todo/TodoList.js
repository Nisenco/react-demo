import React,{PureComponent}from "react";
import { connect } from 'react-redux'
// import {addTodo} from 'appRedux/actions/todoAction.js';
import {addTodo} from '../../redux/actions/todoAction.js';
class TodoList extends PureComponent {
    constructor(props){
        super(props);
        this.setValue = this.setValue.bind(this);
        this.addTodoList = this.addTodoList.bind(this);
        this.state={
            inputValue:'',
        };
    }
    setValue(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    addTodoList(){
        const {dispatch,store} = this.props;
        const {inputValue} = this.state;
        var a = store.getState();
        console.log(a,'1');
        console.log(this.props,'props');
        if(inputValue){
            dispatch(addTodo(inputValue))
        }
    }
    render(){
        const {store} = this.props;
        const {todos} = store && store.getState();
        store && store.getState();
        console.log(store && store.getState(),'99');
        console.log(todos,'todos');
        return (<div>
            <input onChange={this.setValue}value ={this.state.inputValue}/> <button onClick = {this.addTodoList}>add todo</button>
        </div>)
    }
}
export default connect()(TodoList);
