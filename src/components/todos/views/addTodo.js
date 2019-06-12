import React,{PureComponent} from "react";

export default class AddTodo extends PureComponent{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    refInput(node){
        this.input = node;
    }
    onSubmit(e){
       e.preventDefault();
       const input = this.input;
       if(!input.value.trim()){
           return;
       }
       this.props.onAdd(input.value);
       input.value='';
    }
    render(){
        return (<div className="add-todo">
            <form onSubmit = {this.onSubmit}>
                <input className="new-todo" ref={this.refInput}/>
                <button type="submit" className="add-btn">添加</button>
            </form>
        </div>)
    }
}
