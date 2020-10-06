import * as d3 from 'd3';

const drawBarWithAxis = (id)=>{
  
	var marge = {top:10,bottom:60,left:10,right:60};
    var dataset = [ 2.5 , 2.1 , 1.7 , 1.3 , 0.9 ];  
    var scaleLinear   = d3.scaleLinear()
      .domain([0,d3.max(dataset)])
      .range([0,300]);
    var svg = d3.select(id).select('svg');
    var g = svg.append('g');
    var rectHeight = 30;
    g.selectAll('rect').data(dataset).enter().append('rect')
      .attr('x',20)
      .attr('y',(data,index)=>{
        return index * rectHeight;
      })
      .attr('width',(data)=>{
        return scaleLinear (data);
      })
      .attr('height',rectHeight - 5)
      .attr('fill','blue');
      // 定义线性比例尺
    var xScale = d3.scaleLinear()
        .domain([0,d3.max(dataset)])
        .range([0,250]);
    var xAxis = d3.axisBottom(xScale).ticks(7);// 定义一个axis，由bottom可知，是朝下的 ;ticks(7);//设置刻度数目
    g.append('g').attr("transform","translate("+20+","+(dataset.length*rectHeight)+")").call(xAxis);
}

export {
	drawBarWithAxis
}