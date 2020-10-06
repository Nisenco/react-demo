import * as d3 from 'd3';
import * as d3Scale from "d3-scale";

const drawPie = function(id){
    var width = 600;
	var height = 300;
	var labelHeight = 18;
    var radius = d3.min(width,height)/2;
    var colorSeq = d3Scale.scaleSequential()
				.domain([0, pieData.length])
				.interpolator(d3.interpolateGreens);
	var arc = d3.arc()
				.innerRadius(0)
				.outerRadius(radius);
    const pieData  = [{
    	data:{key: "脂質", value: 0.1},
		index: 4,
		value: 0.1,
		startAngle: 6.276902121872407,
		endAngle: 6.283185307179586,
		padAngle: 0},{
			data: {key: "水分", value: 95.4},
			index: 0,
			value: 95.4,
			startAngle: 0,
			endAngle: 5.994158783049326,
			padAngle: 0,
		},{
		data: {
			key: "脂質",
			value: 0.1,
			},
		index: 4,
		value: 0.1,
		startAngle: 6.276902121872407,
		endAngle: 6.283185307179586,
		padAngle: 0,
		}];
    const svg = d3.select(id).select('svg').attr('width',width).attr('height',height);
    const chart = svg.append('g').attr('transform',`translate(${radius},${radius})`);

    chart.selectAll(null)
    	.data(pieData)
    	.enter()
    	.append('path')
    	.attr('d', arc)
	    .attr('fill', d => colorSeq(d.index))
	    .attr('stroke', 'grey')
	    .style('stroke-width', '1px');
	const legend = svg.append('g').attr('transform', `translate(${radius * 2 + 20},0)`);

	legend
    .selectAll(null)
    .data(pieData)
    .enter()
    .append('rect')
    .attr('y', d => labelHeight * d.index * 1.8)
    .attr('width', labelHeight)
    .attr('height', labelHeight)
    .attr('fill', d => colorSeq(d.index))
    .attr('stroke', 'grey')
    .style('stroke-width', '1px');

    legend
    .selectAll(null)
    .data(pieData)
    .enter()
    .append('text')
    .text(d => d.data.key)
    .attr('x', labelHeight * 1.2)
    .attr('y', d => labelHeight * d.index * 1.8 + labelHeight)
    .style('font-family', 'sans-serif')
    .style('font-size', `${labelHeight}px`);
    // return svg.node();
}

export {
    drawPie
}