import React,{PureComponent} from 'react';
import {Checkbox} from 'antd';
import icon_pp_ziding from 'assets/imgs/icon_pp_ziding.png';
import './CustomMetrics.css';
const CheckboxGroup = Checkbox.Group;
/*
*   title: '自定义指标’
*   list: [
*       {title:'可对比指标’，name: 'contrast'，num：4，data:[{label:'总声量’,value:'voice’},{label:'行业占比’,value:'voice’},{label:'传播指数’,value:'voice’},{label:'提及话题数’,value:'voice’},{label:'话题参与数’,value:'voice’},{label:'美誉指数’,value:'voice’}]}，
*       {title:'非对比指标’，name: 'noncontrast'，num：2，data:[{label:'微博账号’,value:'voice’},{label:'粉丝数’,value:'voice’},{label:'人气指数’,value:'voice’}]}
*     ]
*   selected:
*   onChange  返回值 ['voice','voice']
* */

//自定义指标
class CustomMetrics extends PureComponent{
    constructor(props){
        super(props);
        this.changeLists = this.changeLists.bind(this);
        this.changeData = this.changeData.bind(this);
        this.metricsConfirm = this.metricsConfirm.bind(this);
        this.metricsCancel = this.metricsCancel.bind(this);
        this.tempSelect={};
        this.state = {
            show:false,
            list:this.props.list,
            selectList:this.props.selected || {contrast:["voice1","voice4","voice5","voice2"],noncontrast:["voice9","voice8"]}
        }
    }
    changeLists(){
        const  {show} = this.state;
        this.setState({
            show:!show
        })
    }
    changeData(name,value){
        console.log(value,'changeData');
        console.log(name,'name');
        this.tempSelect[name] = value;
        console.log(this.tempSelect,'this.tempSelect');
        this.setState({
            selectList:this.tempSelect
        },()=>{
            console.log(this.state.selectList,'000000')
        })
    }
    //確定
    metricsConfirm(){
        const {onChange} = this.props;
        const {selectList}= this.state;
        this.setState({
            show:false
        },()=>{
            if(onChange){
                onChange(selectList);
                // onChange(this.tempSelect);
            }
        })
    }
    //取消
    metricsCancel(){
        this.setState({
            show:false
        })
    }
    render(){
        const {title,list} = this.props;
        const {show,selectList} = this.state;
        return(<div className="custom_metrics_wraper" >
            {/*onMouseLeave={this.metricsCancel}*/}
            <div className='custom_metrics_title' onClick={this.changeLists} >
                <img src={icon_pp_ziding}/> {title}
            </div>
            {
                show?<div className="custom_metrics_content">
                    <div>
                        {
                            list && list.map(item=>{
                                return (
                                    <React.Fragment key={item.name}>
                                        <div className="metrics_content_title">
                                            <span>{item.title} </span>
                                            <span>（選擇{item.num}個）</span>
                                        </div>
                                        <CheckboxGroup onChange={this.changeData.bind(this,item.name)} defaultValue={selectList[item.name]} options={item.data}/>
                                    </React.Fragment>

                                )
                            })
                        }
                    </div>
                    <div className="custom_metrics_option">
                        <button onClick={this.metricsConfirm}>確定</button>
                        <button onClick={this.metricsCancel}>取消</button>
                    </div>
                </div>:null
            }
        </div>)
    }
}

export default CustomMetrics;
