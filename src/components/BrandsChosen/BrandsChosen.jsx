import React, {PureComponent} from 'react';
import {createPortal} from 'react-dom';
import Axios from 'axios';
import {message} from 'antd';
import './BrandsChosen.css';
const AppRoot =  document.getElementById('root');
// console.log(AppRoot,'poop');
const doc = window.document;
class BrandsChosen extends PureComponent {
    constructor(props) {
        super(props);
        this.node = doc.createElement('div');
        this.node.id = 'portal-1';
        doc.body.appendChild(this.node);
        this.state = {
            visible: this.props.visible || false,
            data: {},
            selectData: {},
        }
    }

    componentDidMount() {
        const {url} = this.props;
        this.getData(url);
        window.addEventListener('click',()=>{
            const {visible} = this.state;
            if(visible){
                doc.getElementsByTagName('body')[0].classList.add('notScroll');
            }else {
                doc.getElementsByTagName('body')[0].classList.remove('notScroll');
            }
        })
    }
    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }
    getData(url) {
        Axios.get(url).then(({data: {code, data, msg}}) => {
            // console.log('000');
            // code = 0;
            // data = {};
            // if(Number(code) === 0){
            //
            // }else {
            //     message.info('获取品牌失败');
            // }
        }).catch(e => {
            // todo 删除catch 处理
            let code = 0;
            let data = {};
            if (Number(code) === 0) {

            } else {
                message.warn('获取品牌失败');
            }
        });
    }

    showModal=()=>{
        const {visible} = this.state;
        this.setState({
            visible:!visible
        })
    };
    render() {
        const {visible} = this.state;
        return (<div className="brands-chosen-wraper">
            <div>
                <span className="brands-chosen-title" onClick={this.showModal}>按合作品牌筛选</span>
                    <span>已选择
                    <span style={{color: '#73FAFE'}}>12个</span>品牌
                </span>
            </div>
            {
                visible? createPortal(<div>
                    <div className="brands-chosen-modal" onClick={this.showModal} />
                    <div className="brands-chosen-modal-content">
                        <div className="content-left">00000</div>
                        <div className="content-right">000008889
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                            <div>000008889</div>
                        </div>
                    </div>
                </div>,this.node):null
            }
        </div>)
    }
}

export default BrandsChosen
