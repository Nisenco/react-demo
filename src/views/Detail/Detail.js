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
    render(){
        return (<div className="detail_wraper">
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
