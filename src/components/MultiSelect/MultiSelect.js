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
        this.state = {
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
    render (){
        const {data} = this.state;
        const {title}  = this.props;
        return <div className="multiSelect_wraper">
            <div className="multiSelect_input_wraper">
                {title}：<span>全部 <img src={icon_xiala}/></span>
                {/*<Input className="multiSelect_input"/>*/}
            </div>
            <div className="multiSelect_checkbox">
                <div>
                    <Checkbox.Group
                        options={data}
                    />
                </div>
                <div className="multiSelect_option">
                    <button className="multiSelect_confirm">确定</button>
                    <button className="multiSelect_cancel">取消</button>
                </div>
            </div>

        </div>
    }
}
export default MultiSelect;
