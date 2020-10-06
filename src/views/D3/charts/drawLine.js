import * as d3 from 'd3';

const drawLine = (id,config)=>{
	// config 做配置项
	console.log(id,'00')
	var margin = {top:60,bottom:60,left:60,right:60}//设置边距
	var margin1 = 60;
	console.log('document.getElementById(id)',  d3.select(id).node().getBoundingClientRect());

// d3.select(id).node().getBoundingClientRect().width
	var width = 600-margin.left-margin.right ;
	// d3.select(id).node().getBoundingClientRect().height
	var height = 400-margin.top-margin.bottom;
	var n = 21;
	var dataset = d3.range(n).map(function(i) { return {data:`2020-09-${i<10? '0'+ i: i}`,pv:parseInt(Math.random()*100)}});
	var xScale = d3.scaleLinear()
		.domain([0,n])
		.range([0,width]);
	var yScale = d3.scaleLinear()
		.domain(d3.extent(dataset,(d)=>d.pv))
		.range([height,0]);
	var line = d3.line()
		.x(function(d,index){return xScale(index)})
		.y(function (d){return yScale(d.pv)});
	var svg = d3.select(id).select('svg')
		.attr('width',width-margin.left-margin.riht)
		.attr('height',height-margin.top-margin.bottom)
		.append('g')
		.attr('transform',`translate(${margin.left},${margin.top})`);

	svg.append('g')
		.attr('transform',`translate(0,${height})`)
		.call(d3.axisBottom(xScale));
	svg.append('g')
		.call(d3.axisLeft(yScale));

	svg.append('path')
		.datum(dataset)
		.attr('fill','none')
		.attr('stroke','red')
		.attr('stroke-width',2)
		.attr('d',line);
	svg.selectAll(".dot")
	    .data(dataset)
	  	.enter()
	  	.append("circle")
	    .attr("cx", function(d, i) { return xScale(i) })
	    .attr("cy", function(d) { return yScale(d.pv) })
	    .attr("r", 3);
}

export {
	drawLine
}