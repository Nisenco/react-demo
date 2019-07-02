import React, {PureComponent} from 'react';
import {createPortal} from 'react-dom';
import Axios from 'axios';
import {message} from 'antd';
import './BrandsChosen.css';
const doc = window.document;
const Anchors = [{id:'A',name:'ABCD'},{id:'E',name:'EFGH'},{id:'H',name:'HIGK'},{id:'L',name:'LMNO'},{id:'Q',name:'QRST'},{id:'U',name:'UVWX'},{id:'Y',name:'YZ'}];
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

    changeAnchor = (e)=>{
        // const value = e.target.value;
        console.log(e,'value');
    };
    showModal=()=>{
        const {visible} = this.state;
        this.setState({
            visible:!visible
        })
    };
    render() {
        const {visible} = this.state;
        const anchorLists = Anchors.map(item=>{
            return <span key={item.id} className="content-anchor" value={item.id} onClick={this.changeAnchor.bind(this,item.id)}>{item.name}</span>
        }) ;
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
                        <div className="modal-content-wraper">
                            <div>
                                <div className="content-left">00000</div>
                                <div className="content-right">
                                    <div className="content-right-options"><span>按字母选择：</span>
                                        {
                                            anchorLists
                                        }
                                    </div>
                                    <div className="modal-right-content">
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
                            </div>
                            <div className='modal-content-bottom'>
                                nisang
                            </div>
                        </div>

                    </div>
                </div>,this.node):null
            }
        </div>)
    }
}

export default BrandsChosen
