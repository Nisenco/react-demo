import * as d3 from 'd3';
const drawBar = (data)=>{
    var margin = {top:60,bottom:60,left:60,right:60};
    var svg = d3.select('#drawBar').select('svg');
    svg.selectAll('g').remove();
    svg.selectAll('rect').remove();
    svg.selectAll('text').remove();
    var width = svg.attr("width");
    var height = svg.attr("height");
    var g = svg.append("g")
      .attr("transform","translate("+margin.top+","+margin.left+")");
    var dataset = data||[];

    // d3.range(dataset.length) 返回的是一个等差数列
    // 创建x轴 坐标轴
    var xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0,width-margin.left-margin.right]);
    var xAxis = d3.axisBottom(xScale);

    // 创建y轴 坐标轴
    var yScale = d3.scaleLinear()
      .domain([0,d3.max(dataset)])
      .range([height-margin.top-margin.bottom,0]);
    var yAxis = d3.axisLeft(yScale);
    g.append("g")
        .attr("transform","translate("+0+","+(height-margin.top-margin.bottom)+")")
        .call(xAxis);
    g.append("g")
      .attr("transform","translate(0,0)")
      .call(yAxis);

    var gs = g.selectAll('.rect')
      .data(dataset)
      .enter()
      .append('g');

    // 计算 矩形之间的间隙
    var rectPadding = 20;

    // 渲染 每个柱形图
    gs.append('rect')
      .attr('x',(data,index)=>{
        return xScale(index) + rectPadding/2;
      })
      .attr('y',(data,index)=>{
        var min = yScale.domain()[0]; // 
        return yScale(min);
        // return 0;
      })
      .attr('width',()=>{
        return xScale.step() - rectPadding;
      })
      .attr('height',(d)=>{
        return 0;
      })
      .attr('fill',()=>{
        return 'blue';
      })
      .on("mouseover",function(){
        var rect = d3.select(this)
          .transition()
          .duration(500)
          .attr('fill','yellow')
          .attr('cursor','pointer')
      })
      .on('mouseout',function(){
        var rect = d3.select(this)
          .transition()
          .delay(200)
          .duration(100)
          .attr('fill','blue')
      })
      //  添加柱状图动画
      .transition()//添加过渡
      .duration(1000)//持续时间
      .delay(function(d,i){//延迟
        return i*200;
      })
      //.ease(d3.easeElasticInOut)
      .attr("y",function(d){//回到最终状态
        return yScale(d);
      })
      .attr("height",function(d){//回到最终状态
        return height-margin.top-margin.bottom-yScale(d);
      });

    // 绘制文字
    gs.append("text")
      .attr("x",function(d,i){
        return xScale(i)+rectPadding/2-3;
      })
      .attr("y",function(d){
        return yScale(d);
      })
      .attr("dx",function(){
        return (xScale.step()-rectPadding)/2;
      })
      .attr("dy",20)
      .text(function(d){
        return d;
      })
      .transition()
      .duration(2000)
      .delay(function(d,i){
        return i*400;
      })
      .attr("y",function(d){
        return yScale(d+3);
      });
  }

export {
  drawBar
}