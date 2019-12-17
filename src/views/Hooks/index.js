import React,{ PureComponent } from 'react';
import './index.css';
export default class Hooks extends PureComponent{
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
    // querySelector 只返回第一个值
    // querySelectorAll 返回数字 
    this.boxEle = document.querySelectorAll('.box');
    console.log(this.boxEle);
    var io = new IntersectionObserver((entry)=>{
      console.log(entry,'可见');
      entry.forEach(item=>{
        if(item.isIntersecting){
          console.log(item.target);
          // io.unobserve 停止观察一个元素
          // io.disconnect() 停止观察所有元素
          io.unobserve(item.target)	
        }
      })
    },{
      root:document.querySelector('.box_wraper'),
      rootMargin: '0px', 
      threshold: 1.0
    });
    Array.from(this.boxEle).map(item=>io.observe(item))
  }

  
  render(){
    return(
      <div className="box_wraper">
        <div className="box">
          hooks1111
        </div>
        <div className="box">
          hooks2
        </div>
        <div className="box">
          hooks3
        </div>
        <div className="box">
          hooks4
        </div>
        <div className="box">
          hooks5
        </div>
        <div className="box">
          hooks6
        </div>
        <div className="box">
          hooks7
        </div>
        <div className="box">
          hooks8
        </div>
        <div className="box">
          hooks9
        </div>
        <div className="box">
          hooks10
        </div>

      </div>
      
    )
  }
}