import * as d3 from 'd3';

const drawPie1 = function(id){
    var width = 600;
	var height = 300;
	var labelHeight = 18;
    var radius = d3.min(width,height)/2;
	var arc = d3.arc()
				.innerRadius(0)
				.outerRadius(radius);
    const svg = d3.select(id).select('svg').attr('width',width).attr('height',height);
    const g = svg.append('g').attr('transform',`translate(${radius},${radius})`);
    var dataset = [ 30 , 10 , 43 , 55 , 13 ];

    //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
    	var colorScale = d3.scaleOrdinal()
    		.domain(d3.range(dataset.length))
    		.range(d3.schemeCategory10);

    		//新建一个饼状图
    	var pie = d3.pie();
    	//新建一个弧形生成器
    	var innerRadius = 0;//内半径
    	var outerRadius = 100;//外半径
    	var arc_generator = d3.arc()
    		.innerRadius(0)
    		.outerRadius(100);

    //将原始数据变成可以绘制饼状图的数据，
    	var pieData = pie(dataset);
    	
    	//在浏览器的控制台打印pieData
    	console.log(pieData);
    	
    	//在有了绘制饼状图必须的数据后，我们就可以开始绘制了
    	var gs = g.selectAll(".g")
    		.data(pieData)
    		.enter()
    		.append("g")
    		.attr("transform","translate("+width/2+","+height/2+")")//位置信息
    		
    	//绘制饼状图的各个扇形
    	gs.append("path")
    		.attr("d",function(d){
    			return arc_generator(d);//往弧形生成器中出入数据
    		})
    		.attr("fill",function(d,i){
    			return colorScale(i);
    		});
    		
    	//绘制饼状图上面的文字信息
    	gs.append("text")
    		.attr("transform",function(d){//位置设在中心处
    			return "translate("+arc_generator.centroid(d)+")";
    		})
    		.attr("text-anchor","middle")
    		.text(function(d){
    			return d.data;
    		})
	
}

export {
    drawPie1
}