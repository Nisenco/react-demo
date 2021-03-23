import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import './d3.css';
// import * as _ from 'lodash'
// import {drawPie,drawPie1,drawBarWithAxis,drawLine,drawBar,drawDynamicBar} from './charts/index.js';
// let COUNT = 0;
var id = 0,
  data = [],
  duration = 500,
  chartHeight = 100,
  chartWidth = 680;
class D3Demo extends PureComponent {
  constructor(props) {
    super(props);
    this.data = [{ name: 'Linear', fn: d3.easeLinear },
    { name: 'Cubic', fn: d3.easeCubic },
    { name: 'CubicIn', fn: d3.easeCubicIn },
    { name: 'Sin', fn: d3.easeSin },
    { name: 'SinIn', fn: d3.easeSinIn },
    { name: 'Exp', fn: d3.easeExp },
    { name: 'Circle', fn: d3.easeCircle },
    { name: 'Back', fn: d3.easeBack },
    { name: 'Bounce', fn: d3.easeBounce },
    { name: 'Elastic', fn: d3.easeElastic },
    { name: 'Custom', fn: function (t) { return t * t; } }];
    this.colors = d3.scaleOrdinal(d3.schemeCategory20);
    this.timer = null;
    this.width = 500;
    this.height = 500;
    this.offset = 50;
    this.margin = 25;
    this.axisWidth = this.width - 2 * this.margin;
  }
  componentDidMount() {
    // this.renderAll();
    // this.svg = d3.select('div#drawBar1').append('svg')
    // .attr('class','axis')
    // .attr('width',this.width)
    // .attr('height',this.height);
    // this.renderXAxis();
    // this.renderYAxis();
    // this.renderTransitions();
    // this.renderData(data);
    this.renderEasing(this.data);
    // setTimeout(() => {
    //   // data.shift();
    //   // this.pushData(data);
    //   // this.renderData(data);
    //   this.renderDiv();
    // }, 2000);
  }
  // 自定义刻度
  renderAll = () => {
    this.svg = d3.select('div#drawBar').append('svg')
      .attr('class', 'axis')
      .attr('width', this.width)
      .attr('height', this.height);
    this.scale = d3.scaleLinear().domain([0, 1]).range([0, this.axisWidth]);
    var axis = d3.axisBottom()
      .scale(this.scale)
      .ticks(10)
      .tickSize(12)
      .tickPadding(10)
      .tickFormat(d3.format(".0%"));
    this.svg.append('g')
      .attr('transform', () => {
        return `translate(${this.margin},${this.margin})`;
      })
      .call(axis);
  }
  // 绘制表格线
  renderXAxis = () => {
    var axisLength = this.width - 2 * this.margin;
    var scale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, axisLength]);
    var aAxis = d3.axisBottom().scale(scale);
    this.svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', () => {
        return `translate(${this.margin},${this.height - this.margin})`;
      })
      .call(aAxis);
    d3.selectAll('g.x-axis g.tick')
      .append('line')
      .classed('grid-line', true)
      .attr('x1', 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", - (this.height - 2 * this.margin));
  }
  renderYAxis = () => {
    var axisLength = this.height - 2 * this.margin;
    var scale = d3.scaleLinear().domain([100, 0]).range([0, axisLength]);
    var yAxis = d3.axisLeft().scale(scale);
    this.svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', () => {
        return `translate(${this.margin},${this.margin})`;
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
  // renderTransition = ()=>{
  //   this.transition = d3.select('div#transition').append('div')
  //     .classed('box',true)
  //     .style("background-color", "#e9967a")
  //     .transition()
  //     .duration(5000)
  //     .style("background-color", "#add8e6") // <-E
  //     .style("margin-left", "600px") // <-F
  //     .style("width", "100px")
  //     .style("height", "100px");
  // }
  renderTransitions = () => {
    for (var i = 0; i < 20; i++) {
      this.pushData(data)
    }
  }
  renderData = (data) => {
    var selection = d3.select("div#transition").selectAll("div.v-bar").data(data, function (d) { return d.id; });
    selection.enter().append('div')
      .attr('class', 'v-bar')
      .style('z-index', 0)
      .style('position', 'fixed')
      .style("top", chartHeight + "px")
      .style("left", (d, i) => {
        return this.barLeft(i + 1) + "px";
      })
      .style("height", "0px")
      .append("span");
    selection.transition().duration(duration)
      .style('top', (d) => {
        return chartHeight - this.barHeight(d) + 'px'
      })
      .style("left", (d, i) => {
        return this.barLeft(i) + "px";
      })
      .style("height", (d) => {
        return this.barHeight(d) + "px";
      })
      .select("span")
      .text(function (d) { return d.value; });
    selection.exit()
      .transition()
      .duration(duration)
      .style("left", (d, i) => {
        return this.barLeft(-1) + "px";
      })
      .remove();
  }
  pushData = (data) => {
    data.push({
      id: ++id,
      value: Math.round(Math.random() * chartHeight)
    })
  }
  barLeft = (i) => {
    return i * (30 + 2);
  }
  barHeight = (d) => {
    return d.value;
  }
  renderEasing = (data)=>{
    d3.select('div#easing').selectAll('div').data(data)
      .enter()
      .append('div')
      .attr('class','fixes-cell')
      .style('top',(d,i)=>{
        return i*40 + 'px'
      })
      .style('backgrounde-color',(d,i)=>{
        return this.colors(i);
      })
      .style('color','white')
      .style('left','500px')
      .text((d)=>{
        return d.name
      });
  }
  renderDiv = ()=>{
    d3.selectAll('#easing>div').each((d)=>{
      d3.select(this).transition()
        .ease(d.fn)
        .duration(1500)
        .style('left','10px')
    });
  }
  render() {
    return (
      <div className="d3" >
        {/* <div id="drawBar"></div> */}
        {/* <div id="drawBar1"></div> */}
        {/* <div id="transition"></div> */}
        <div id="easing"></div>
      </div>)
  }
}
export default D3Demo;