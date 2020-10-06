import React, { PureComponent } from 'react';
import Echarts from 'echarts';
import {drawPie,drawLine,drawLineBar,drawMap,drawGraph} from './chartHelp.js';
import { mapData } from './data.js'
import './echarts.css'
console.log(mapData,'mapData');
class TestEcharts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    console.log('111');
    // 基于准备好的dom，初始化echarts实例
    // this.creatBar();
    // this.creatMap();
    // drawPie('pie');
    // drawLine('line');
    // drawLineBar('lineBar');
    // drawMap('map');
    // drawGraph('graph');
  }
  creatBar = () => {
    var myChart = Echarts.init(document.getElementById('main'));
    console.log(myChart, 'myChartmyChart');
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  creatMap = () => {
    var myChart = Echarts.init(document.getElementById('map'));
    console.log(myChart, 'myChartmyChart');
    // 绘制图表
    const option = {
      tooltip: {
        triggerOn: "click",
        formatter: function (e, t, n) {
          return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
        }
      },
      visualMap: {
        min: 0,
        max: 1000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        text: ["高", "低"],
        pieces: [{
          gt: 100,
          label: "> 100 人",
          color: "#7f1100"
        }, {
          gte: 10,
          lte: 100,
          label: "10 - 100 人",
          color: "#ff5428"
        }, {
          gte: 1,
          lt: 10,
          label: "1 - 9 人",
          color: "#ff8c71"
        }, {
          gt: 0,
          lt: 1,
          label: "疑似",
          color: "#ffd768"
        }, {
          value: 0,
          color: "#ffffff"
        }],
        show: !0
      },
      geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
          min: 1,
          max: 2
        },
        zoom: 1.23,
        top: 120,
        label: {
          normal: {
            show: !0,
            fontSize: "14",
            color: "rgba(0,0,0,0.7)"
          }
        },
        itemStyle: {
          normal: {
            //shadowBlur: 50,
            //shadowColor: 'rgba(0, 0, 0, 0.2)',
            borderColor: "rgba(0, 0, 0, 0.2)"
          },
          emphasis: {
            areaColor: "#f2d5ad",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            borderWidth: 0
          }
        }
      },
      series: [{
        name: "确诊病例",
        type: "map",
        geoIndex: 0,
        data: mapData,
      }]
    };
    myChart.setOption(option);
  }
  creatBar = ()=>{
    
  }
  render() {
    return <div>
      {/* <div id="main"></div>
      <div id='pie' style={{height:400,width:400,verticalAlign:'top'}}></div> */}
      <div id='line' style={{height:600,width:800,verticalAlign:'top'}}></div>
      {/* <div id='lineBar' style={{height:400,width:400,verticalAlign:'top'}}></div>
      <div id="map"></div> */}
      <div id='graph' style={{height:600,width:800,verticalAlign:'top'}}></div>
    </div>
  }
}
export default TestEcharts