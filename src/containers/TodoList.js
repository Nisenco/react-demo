import React, {PureComponent} from 'react';
import {Button,Input} from "antd";
import {connect} from "react-redux";
import {addTodo} from '../reducers/actions/todoAction';

// import Store from "../reducers/stores";

class TodoList extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
    }

    changeInput(e){
        const {value} = e.target;
        this.setState({
            inputValue:value
        })
    };
    confirmValue = ()=>{
        const {inputValue} = this.state;
        const {dispatch} = this.props;
        if(inputValue === '' ) return;
        this.setState({
            inputValue:''
        },()=>{
            dispatch(addTodo(inputValue));
        });
    };
    render(){
        const {inputValue}= this.state;
        return (<div>
            <div>
                <Input style={{width:120,display:'inline-block',marginRight:12}} value={inputValue} onChange={this.changeInput.bind(this)}/>
                <Button onClick={this.confirmValue}>确定</Button>
            </div>
        </div>)
    }
}
export  default  connect()(TodoList);
