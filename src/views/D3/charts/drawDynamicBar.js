import * as d3 from 'd3';

const margin = ({top: 16, right: 6, bottom: 6, left: 0});



const barSize = 48;
const n = 5;
const k = 5;
const x =(margin,config)=>{
	const {width,height} = config;
	return d3.scaleLinear([0, 1], [margin.left, width - margin.right]);
} 

var names = function(data){
	return data.map(d=>d.name);
}
const y = (margin,n)=>{
	return d3.scaleBand()
    .domain(d3.range(n + 1))
    .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
    .padding(0.1);
}
var datevalues = (data)=>{
	console.log(data,'<=data');
	var _data =  Array.from(d3.rollup(data, ([d]) => d.value, d => +d.date, d => d.name))
	  .map(([date, data]) => [new Date(date), data])
	  .sort(([a], [b]) => d3.ascending(a, b));
  console.log(_data,'-data');
	return _data;
}

var rank = (data,value)=>{
	console.log(data,'rank');
	var _names = names(data);
	const _data = Array.from(_names, name => ({name, value: value(name)}));
	data.sort((a, b) => d3.descending(a.value, b.value));
	for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
	return _data;
}
var keyframes = (data)=>{
	const keyframes = [];

	let ka, a, kb, b;
	for ([[ka, a], [kb, b]] of d3.pairs(datevalues(data))) {
		for (let i = 0; i < k; ++i) {
		  const t = i / k;
		  keyframes.push([
		    new Date(ka * (1 - t) + kb * t),
		    rank(data,name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
		  ]);
		}
	}
  keyframes.push([new Date(kb), rank(data,name => b.get(name) || 0)]);
  return keyframes;
}
var nameframes = (data)=>{
	return d3.groups(keyframes(data).flatMap(([, data]) => data), d => d.name);
}
var prev = (data)=>{
	return new Map(nameframes(data).flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a])));
}
var next = (data)=>{
	return new Map(nameframes(data).flatMap(([, data]) => d3.pairs(data)))
}
const color =function(data){
  const scale = d3.scaleOrdinal(d3.schemeTableau10);
  if (data.some(d => d.category !== undefined)) {
    const categoryByName = new Map(data.map(d => [d.name, d.category]))
    scale.domain(Array.from(categoryByName.values()));
    return d => scale(categoryByName.get(d.name));
  }
  return d => scale(d.name);
}
const bar = (svg,n,data)=>{
	let bar  = svg.append('g')
		.attr('fill-opacity',0.6)
		.selectAll('rect');
	return (data,transition)=> bar = bar
		.data(data.slice(n), d=> d.name)
		.join(
			enter => enter.append("rect")
				.attr("fill", color(data))
				.attr("x", x(0))
				.attr("y", d => y((prev.get(d) || d).rank))
				.attr("width", d => x((prev.get(d) || d).value) - x(0))
				.attr("height", y.bandwidth()),
			update => update,
			exit => exit.transition(transition).remove()
				.attr("y", d => y((next.get(d) || d).rank))
				.attr("width", d => x((next.get(d) || d).value) - x(0))
		)
		.call(
			bar => bar.transition(transition)
			.attr("y", d => y(d.rank))
			.attr("width", d => x(d.value) - x(0))
		);
}


const duration = 250;
const drawDynamicBar = function(id,data,config){
	const{width,height} = config;
	var _names =names(data);
	var svg = d3.select(id).select('svg')
		.attr('width',width)
		.attr('height',height);
		console.log(width,height);
	const updateBars = bar(svg,n, data);
	// yield svg.node();

	for (const keyframe of keyframes(data)) {
		// const transition = svg.transition()
		//     .duration(duration)
		//     .ease(d3.easeLinear);

		// // Extract the top bar’s value.
		// x.domain([0, keyframe[1][0].value]);

		// // updateAxis(keyframe, transition);
		// updateBars(keyframe, transition);
		// // updateLabels(keyframe, transition);
		// // updateTicker(keyframe, transition);

		// // invalidation.then(() => svg.interrupt());
		// // await transition.end();
		// transition.end();
	}
}
export {
	drawDynamicBar
}