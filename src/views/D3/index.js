import React ,{PureComponent} from 'react';
import * as d3 from 'd3';
import './d3.css';
// import * as _ from 'lodash'
import {drawPie,drawPie1,drawBarWithAxis,drawLine,drawBar,drawDynamicBar} from './charts/index.js';
console.log(drawDynamicBar);
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
      {date: '2000-01-01', name: "Gillette", category: "FMCG", value: 17358},
      {date: '2001-01-01', name: "Coca-Cola", category: "Beverages", value: 68945},
      {date: '2001-01-01', name: "Microsoft", category: "Technology", value: 65068},
      {date: '2001-01-01', name: "IBM", category: "Business Services", value: 52752},
      {date: '2001-01-01', name: "GE", category: "Diversified", value: 42396},
      {date: '2001-01-01', name: "Nokia", category: "Technology", value: 35035},
      {date: '2001-01-01', name: "Intel", category: "Technology", value: 34665},
      {date: '2001-01-01', name: "Disney", category: "Media", value: 32591},
      {date: '2001-01-01', name: "Ford", category: "Automotive", value: 30092},
      {date: '2001-01-01', name: "McDonald's", category: "Restaurants", value: 25289},
      {date: '2001-01-01', name: "AT&T", category: "Telecommunications", value: 22828},
      {date: '2001-01-01', name: "Marlboro", category: "Tobacco", value: 22053},
      {date: '2001-01-01', name: "Mercedes-Benz", category: "Automotive", value: 21728},
      {date: '2001-01-01', name: "Citi", category: "Financial Services", value: 19005},
      {date: '2001-01-01', name: "Toyota", category: "Automotive", value: 18578},
      {date: '2001-01-01', name: "HP", category: "Electronics", value: 17983},
      {date: '2001-01-01', name: "Cisco", category: "Business Services", value: 17209},
      {date: '2002-01-01', name: "Coca-Cola", category: "Beverages", value: 69637},
      {date: '2002-01-01', name: "Microsoft", category: "Technology", value: 64091},
      {date: '2002-01-01', name: "IBM", category: "Business Services", value: 51188},
      {date: '2002-01-01', name: "GE", category: "Diversified", value: 41311},
      {date: '2002-01-01', name: "Intel", category: "Technology", value: 30861},
      {date: '2002-01-01', name: "Nokia", category: "Technology", value: 29970},
      {date: '2002-01-01', name: "Disney", category: "Media", value: 29256},
      {date: '2002-01-01', name: "McDonald's", category: "Restaurants", value: 26375},
      {date: '2002-01-01', name: "Marlboro", category: "Tobacco", value: 24151},
      {date: '2002-01-01', name: "Mercedes-Benz", category: "Automotive", value: 21010},
      {date: '2002-01-01', name: "Ford", category: "Automotive", value: 20403},
      {date: '2002-01-01', name: "Toyota", category: "Automotive", value: 19448},
      {date: '2002-01-01', name: "Citi", category: "Financial Services", value: 18066},
      {date: '2002-01-01', name: "HP", category: "Electronics", value: 16776},
      {date: '2002-01-01', name: "American Express", category: "Financial Services", value: 16287},
      {date: '2002-01-01', name: "Cisco", category: "Business Services", value: 16222},
      {date: '2002-01-01', name: "AT&T", category: "Telecommunications", value: 16059},
      {date: '2003-01-01', name: "Coca-Cola", category: "Beverages", value: 70453},
      {date: '2003-01-01', name: "Microsoft", category: "Technology", value: 65174},
      {date: '2003-01-01', name: "IBM", category: "Business Services", value: 51767},
      {date: '2003-01-01', name: "GE", category: "Diversified", value: 42340},
      {date: '2003-01-01', name: "Intel", category: "Technology", value: 31112},
      {date: '2003-01-01', name: "Nokia", category: "Technology", value: 29440},
      {date: '2003-01-01', name: "Disney", category: "Media", value: 28036},
      {date: '2003-01-01', name: "McDonald's", category: "Restaurants", value: 24699},
      {date: '2003-01-01', name: "Marlboro", category: "Tobacco", value: 22183},
      {date: '2003-01-01', name: "Mercedes-Benz", category: "Automotive", value: 21371},
      {date: '2003-01-01', name: "Toyota", category: "Automotive", value: 20784},
      {date: '2003-01-01', name: "HP", category: "Electronics", value: 19860},
      {date: '2003-01-01', name: "Citi", category: "Financial Services", value: 18571},
      {date: '2003-01-01', name: "Ford", category: "Automotive", value: 17066},
      {date: '2003-01-01', name: "American Express", category: "Financial Services", value: 16833},
      {date: '2003-01-01', name: "Gillette", category: "FMCG", value: 15978},
      {date: '2003-01-01', name: "Cisco", category: "Business Services", value: 15789},
      {date: '2003-01-01', name: "Honda", category: "Automotive", value: 15625}
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
    // this.interval = setInterval(()=>{
    //   const {data} = _this.state;
    //   var  _data = _this.data = _this.data.slice(1).concat([parseInt(Math.random()*200)]);
    //   console.log(_data,'_DATA');
    //   console.log(COUNT++);
    // },5000)
  }
  // componentWillUnmount(){
  //   if(this.interval){
  //     clearInterval(this.interval);
  //   }
  // }
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
          <svg></svg>
        </div>
      </div>)
  }
}
export default D3Demo;