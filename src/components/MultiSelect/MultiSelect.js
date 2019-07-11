import React ,{PureComponent} from 'react';
import {Checkbox,Input,Button} from 'antd';
import icon_xiala from 'assets/imgs/icon_xiala.png';
import './MultiSelect.css';
/**
 *  title 趋势类型
 *  data ：[{ label: '暴跌', value: '1' }，...]
 *  onChange  返回数组形式
 * */
class MultiSelect extends PureComponent {
    constructor(props){
        super(props);
        this.selectConfirm = this.selectConfirm.bind(this);
        this.selectCancel = this.selectCancel.bind(this);
        this.selectCheckbox = this.selectCheckbox.bind(this);
        this.changeData = this.changeData.bind(this);
        this.state = {
            show:false,
            selectData:['1','2','3'],
            data:[
                { label: '暴跌', value: '1' },
                { label: '下跌', value: '2' },
                { label: '消退', value: '3' },
                { label: '稳定', value: '4' },
                { label: '酝酿', value: '5' },
                { label: '成长', value: '6' },
                { label: '暴增', value: '7' },
            ]
        }

    }
    //点击文字
    selectCheckbox(){
        const {show} =this.state;
        this.setState({
            show:!show
        })
    }
    changeData(checkedValues){
        // 返回值  ['1','2'] 数组形式
        console.log(checkedValues,'checkedValues');
        this.setState({
            selectData:checkedValues
        })
    }
    //确认
    selectConfirm(){
        const {onChange} = this.props;
        const {selectData} = this.state;
        this.setState({
            show:false
        },()=>{
            if(onChange){
                onChange(selectData);
            }
        })

    }
    // 取消
    selectCancel(){
        this.setState({
            show:false
        })
    }
    render (){
        const {data,show,selectData} = this.state;
        const {title}  = this.props;
        return <div className="multiSelect_wraper">
            <div className="multiSelect_input_wraper" onClick={this.selectCheckbox}>
                {title}：<span>{
                selectData.length == data.length ? '全部' : '部分'
            } <img src={icon_xiala}/></span>
                {/*<Input className="multiSelect_input"/>*/}
            </div>
            {
                show? <div className="multiSelect_checkbox">
                    <div>
                        <Checkbox.Group
                            onChange = {this.changeData}
                            defaultValue={selectData}
                            options={data}
                        />
                    </div>
                    <div className="multiSelect_option">
                        <button className="multiSelect_confirm" onClick={this.selectConfirm}>确定</button>
                        <button className="multiSelect_cancel" onClick={this.selectCancel}>取消</button>
                    </div>
                </div>:null
            }
        </div>
    }
}
export default MultiSelect;
