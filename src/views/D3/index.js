import React ,{PureComponent} from 'react';
import * as d3 from 'd3';
import './d3.css';
// import * as _ from 'lodash'
import {drawPie,drawPie1,drawBarWithAxis,drawLine,drawBar,drawDynamicBar} from './charts/index.js';
console.log(drawPie);
let COUNT = 0;
class D3Demo extends  PureComponent{
  constructor(props){
    super(props);
    this.state={
      width:600,
      height:600,
      data:[10,20,30,23,13,40,27,35,20],
    };
    this.data = [10,20,30,23,13,40,27,35,20];
    this.cityData =[ 
      {date: '2000-01-01', name: "Coca-Cola", category: "Beverages", value: 72537},
      {date: '2000-01-01', name: "Microsoft", category: "Technology", value: 70196},
      {date: '2000-01-01', name: "IBM", category: "Business Services", value: 53183},
      {date: '2000-01-01', name: "Intel", category: "Technology", value: 39048},
      {date: '2000-01-01', name: "Nokia", category: "Technology", value: 38528},
      {date: '2000-01-01', name: "GE", category: "Diversified", value: 38127},
      {date: '2000-01-01', name: "Ford", category: "Automotive", value: 36368},
      {date: '2000-01-01', name: "Disney", category: "Media", value: 33553},
      {date: '2000-01-01', name: "McDonald's", category: "Restaurants", value: 27859},
      {date: '2000-01-01', name: "AT&T", category: "Telecommunications", value: 25548},
      {date: '2000-01-01', name: "Marlboro", category: "Tobacco", value: 22110},
      {date: '2000-01-01', name: "Mercedes-Benz", category: "Automotive", value: 21104},
      {date: '2000-01-01', name: "HP", category: "Electronics", value: 20572},
      {date: '2000-01-01', name: "Cisco", category: "Business Services", value: 20067},
      {date: '2000-01-01', name: "Toyota", category: "Automotive", value: 18823},
      {date: '2000-01-01', name: "Citi", category: "Financial Services", value: 18809},
      {date: '2000-01-01', name: "Gillette", category: "FMCG", value: 17358}
    ];
    this.config = {
      width:600,
      height:600,
    }
  }
  componentDidMount(){
    // this.drawDemo();
    // this.drawBar(this.state.data);
    // drawPie1('#drawPie');
    // drawBarWithAxis('#drawBarWithAxis');
    // drawLine('#drawLine');
    var _this = this;
    drawDynamicBar('#drawBar',this.cityData,this.config);
    this.interval = setInterval(()=>{
      const {data} = _this.state;
      var  _data = _this.data = _this.data.slice(1).concat([parseInt(Math.random()*200)]);
      console.log(_data,'_DATA');
      console.log(COUNT++);
    },5000)
  }
  componentWillUnmount(){
    if(this.interval){
      clearInterval(this.interval);
    }
  }
  drawDemo = ()=>{  
    var marge = {top:10,bottom:60,left:10,right:60}//设置边距
    var dataset = [ 250 , 210 , 170 , 130 , 90 ];  //数据（表示矩形的宽度）
    var svg = d3.select("#drawDemo").select("svg");//得到svg画布
    var g = svg.append("g");
    var rectHeight = 30;
    g.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('x',20)
      .attr('y',(data,index)=>{
        return index * rectHeight;
      })
      .attr('width',(d)=>{
        return d;
      })
      .attr('height',rectHeight - 5)
      .attr('fill', 'blue');
  }
  render(){
    const{width,height} = this.state;

      // <div>demo</div>
      //   <div id="drawDemo">
      //     <svg></svg>
      //   </div>
      //   <div id="drawLine">
      //     <svg></svg>
      //   </div>
      //   <div id="drawPie">
      //     <svg></svg>
      //   </div>
      //   <div>drawBarWithAxis</div>
      //   <div id="drawBarWithAxis">
      //     <svg></svg>
      //   </div>
      // <div id="drawLine">
      //   <svg></svg>
      // </div>
    return (
      <div className="d3" >
        <div id="drawBar">
          
        </div>
      </div>)
  }
}
export default D3Demo;