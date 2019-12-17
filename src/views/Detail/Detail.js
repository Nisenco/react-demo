import React,{PureComponent} from 'react';
import {Select} from 'antd';
import './index.css';
const Option  = Select.Option;
class Detail extends  PureComponent{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleChange = (value)=>{
        console.log(value,'value ++++++=');
    }
    componentDidMount(){
        // clientHeight 可视区高度，scrollHeight 文档高度，scrollTop 滚动高度
        const {clientHeight,scrollHeight,scrollTop}  =this.myRefs;
        console.log(this.myRefs,'9');
        console.log(clientHeight,scrollHeight,scrollTop,'==');
    }
    render(){
        return (<div className="detail_wraper" ref = {(ref)=>this.myRefs =ref}>
            <Select  placeholder="请输入值" style={{ width: 120 }} onChange={this.handleChange}>
                <Option value="jasdfsdfck">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" >Disabled</Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </div>)
    }
}
export default Detail;
