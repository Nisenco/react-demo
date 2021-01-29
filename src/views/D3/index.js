import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import './d3.css';
// import * as _ from 'lodash'
// import {drawPie,drawPie1,drawBarWithAxis,drawLine,drawBar,drawDynamicBar} from './charts/index.js';
// let COUNT = 0;
class D3Demo extends PureComponent {
  constructor(props) {
    super(props);
    this.data = [];
    this.timer = null;
    this.width = 500;
    this.height = 500;
    this.offset = 50;
    this.margin = 25;
    this.axisWidth = this.width - 2 * this.margin;
  }
  componentDidMount(){
    // this.renderAll();
    this.renderXAxis();
    this.renderYAxis();
  }
  // 自定义刻度
  renderAll = () => {
    this.svg = d3.select('div#drawBar').append('svg')
      .attr('class','axis')
      .attr('width',this.width)
      .attr('height',this.height);
    this.scale = d3.scaleLinear().domain([0,1]).range([0,this.axisWidth]);
    var axis = d3.axisBottom()
      .scale(this.scale)
      .ticks(10)
      .tickSize(12)
      .tickPadding(10)
      .tickFormat(d3.format(".0%"));
    this.svg.append('g')
      .attr('transform',()=>{
        return `translate(${this.margin},${this.margin})`;
      })
      .call(axis);
  }
  // 绘制表格线
  renderXAxis = ()=>{
    this.svg = d3.select('div#drawBar1').append('svg')
      .attr('class','axis')
      .attr('width',this.width)
      .attr('height',this.height);
    var axisLength = this.width -2* this.margin;
    var scale = d3.scaleLinear()
        .domain([0,100])
        .range([0,axisLength]);
    var aAxis = d3.axisBottom().scale(scale);
    this.svg.append('g')
      .attr('class','x-axis')
      .attr('transform',()=>{
        return `translate(${this.margin},${this.height-this.margin})`;
      })
      .call(aAxis);
      d3.selectAll('g.x-axis g.tick')
        .append('line')
        .classed('grid-line',true)
        .attr('x1',0)
        .attr("y1", 0)
        .attr("x2", 0)
        .attr("y2", - (this.height - 2 * this.margin));
  }
  renderYAxis = ()=>{
    var axisLength = this.height-2*this.margin;
    var scale = d3.scaleLinear().domain([100,0]).range([0,axisLength]);
    var yAxis = d3.axisLeft().scale(scale);
    this.svg.append('g')
    .attr('class','y-axis')
    .attr('transform',()=>{
      return `translate(${this.margin},${this.height-this.margin})`;
    })
    .call(yAxis)
    d3.selectAll('g.y-axis g.tick')
    .append('line')
    .classed("grid-line", true)
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", axisLength) // <-F
    .attr("y2", 0);
  }
  render() {
    return (
      <div className="d3" >
        <div id="drawBar"></div>
        <div id="drawBar1"></div>
      </div>)
  }
}
export default D3Demo;