import React,{PureComponent}from "react";
import { connect } from 'react-redux'
import {addTodo} from 'appRedux/actions/todoAction.js';

class TodoList extends PureComponent {
    constructor(props){
        super(props);
        this.setValue = this.setValue.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state={
            inputValue:'',
        };
    }
    setValue(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    addTodo(){
        const {dispatch} = this.props;
        const {inputValue} = this.state;
        if(!inputValue){
            dispatch(addTodo(inputValue))
        }
    }
    render(){
        return (<div>
            <input onChange={this.setValue}/> <button onClick = {this.addTodo}>add todo</button>
        </div>)
    }
}
export default connect()(TodoList);
