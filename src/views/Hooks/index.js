import React,{ useState ,useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './index.css';

const data =[
  {id:1,data:'1'},
  {id:2,data:'2'},
  {id:3,data:'3'},
  {id:4,data:'4'},
  {id:6,data:'5'},
  {id:5,data:'6'},
  {id:7,data:'7'},
  {id:8,data:'8'},
  {id:9,data:'9'},
  {id:10,data:'10'},
  {id:11,data:'11'},
  {id:12,data:'12'},
]

function Hooks(props){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    document.title = `you clicked ${count} times`;
  },[count])
  useEffect(()=>{
    let id = document.querySelector('#videojs');
    console.log(id);
  },[])
  const handleScroll = (index,nums)=>{
    let doc = document.getElementsByClassName('data-wraper')[0];
    console.log(doc);
    console.log(index,'index');
    if(!doc){return;}
    console.log(doc.scrollTop,'++++=');
    // 处理头部不滚动

    console.log(nums,'----');
    if(index <=1){
      return ;
    }
    doc.scrollTop = `${40*(index-1)}`;
    console.log(doc.scrollTop,'22scrollTop22');
  }
  const renderData = (data)=>{
    return data && data.map((item,index,ary)=><div className="data-item" key = {item.id} onClick={()=>handleScroll(index,ary.length)}>
      {item.data}
    </div>)
  }
  return (
    <div>
      <p>You clicked {count} times</p>

      
      <Button type='primary' onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <br></br>
      <div className="data-wraper">
        {
          renderData(data)
        }
      </div>
      <div id = "videojs"></div>
    </div>
  )
}
export default withRouter(Hooks);