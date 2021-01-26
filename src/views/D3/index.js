import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import './d3.css';
// import * as _ from 'lodash'
// import {drawPie,drawPie1,drawBarWithAxis,drawLine,drawBar,drawDynamicBar} from './charts/index.js';
// let COUNT = 0;
class D3Demo extends PureComponent {
  constructor(props) {
    super(props);
    this.data =  [];
    this.timer = null;
  }
  componentDidMount() {
    this.dataRender(this.data);
    // if(this.timer){
    //   clearInterval(this.timer);
    // }
    // this.timer = setInterval(()=>{
    //   this.dataRender(this.data);
    // },1500)
  }
  datum = (x)=> 15 + x*x
  newData = ()=>{
    this.data.push(this.datum);
    return this.data;
  }
  dataRender = (data)=>{
    const drawBar = d3.select('div#drawBar')
                      .selectAll('div')
                      .data(this.newData);
      drawBar.enter().append('div').append('span');
      drawBar.attr('class','v-bar')
        .style('height',(d,i)=>{
          return d(i) + 'px';
        })
        .select('span')
        .text((d,i)=>{
          return d(i);
        })
      drawBar.exit().remove();
  }
  render() {
    return (
      <div className="d3" >
        <div id="drawBar">
        </div>
      </div>)
  }
}
export default D3Demo;