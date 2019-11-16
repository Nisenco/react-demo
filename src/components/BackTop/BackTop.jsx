import React ,{PureComponent} from 'react';
import backTop from 'assets/imgs/icon_zhiding .png';
import './BackTop.css'
/**
 *  style :{top: left: right: bottom:}
 * */
class BackTop extends PureComponent{
    constructor(props){
        super(props);
        this.backTopTimer = null;
        this.backTop = this.backTop.bind(this);
    }
    backTop(){
        this.backTopTimer = setInterval(()=>{
            let top =  document.documentElement.scrollTop || document.body.scrollTop;
            let speed = top/10;
            if(top > 0){
                document.body.scrollTop = document.documentElement.scrollTop  -= speed ;
            }else {
                document.documentElement.scrollTop  =  document.body.scrollTop = 0;
                clearInterval(this.backTopTimer);
            }
        },30)
    }
    render(){
        const {style} = this.props;
        return(
            <div className='backTop' onClick={this.backTop} style = {style}>
                <img src={backTop} alt='backTop'/>
            </div>
        )
    }
}

export default BackTop;
