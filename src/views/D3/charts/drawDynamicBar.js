import * as d3 from 'd3';

const margin = ({top: 16, right: 6, bottom: 6, left: 0});
let _config = {};


const drawDynamicBar = (id,data,config)=>{
	const{width,height} = config;
	_config = config
	var names = data.map(d=>d.name);
	var svg = d3.select(id).append('svg')
		.attr('width',width)
		.attr('height',height);
	const updateBars = bar(svg,n);
}

const {width,height} = _config ;
console.log(width,height,'99');
const barSize = 48;
const n = 5;
const x = d3.scaleLinear([0, 1], [margin.left, width - margin.right]);
const y = d3.scaleBand()
    .domain(d3.range(n + 1))
    .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
    .padding(0.1);
// const color =function(){
//   const scale = d3.scaleOrdinal(d3.schemeTableau10);
//   if (data.some(d => d.category !== undefined)) {
//     const categoryByName = new Map(data.map(d => [d.name, d.category]))
//     scale.domain(Array.from(categoryByName.values()));
//     return d => scale(categoryByName.get(d.name));
//   }
//   return d => scale(d.name);
// }
const bar = (svg,n)=>{
	let bar  = svg.append('g')
		.attr('fill-opacity',0.6)
		.selectAll('rect');
	return (data,transition)=> bar = bar
		.data(data.slice(n), d=> d.name)
		// .join(
		// 	enter => enter.append("rect")
		// 		.attr("fill", color)
		// 		.attr("height", y.bandwidth())
		// 		.attr("x", x(0))
		// 		.attr("y", d => y((prev.get(d) || d).rank))
		// 		.attr("width", d => x((prev.get(d) || d).value) - x(0)),
		// 	update => update,
		// 	exit => exit.transition(transition).remove()
		// 		.attr("y", d => y((next.get(d) || d).rank))
		// 		.attr("width", d => x((next.get(d) || d).value) - x(0))
		// )
		// .call(
		// 	bar => bar.transition(transition)
		// 	.attr("y", d => y(d.rank))
		// 	.attr("width", d => x(d.value) - x(0))
		// );
}

export {
	drawDynamicBar
}