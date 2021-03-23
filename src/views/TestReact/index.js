import React, { Component } from 'react';
import { Button } from 'antd';

class TestReact extends Component {
  constructor(props) {
    super(props);
    this.addCount = this.addCount.bind(this);
    this.state = {
      testCount: 0
    }
    console.log('constructor----1');
  }
  static getDerivedStateFromProps(props,state){
    console.log('getDerivedStateFromProps--2-->');
    // console.log(props,'getDerivedStateFromProps--2-->');
    // console.log(state,'getDerivedStateFromProps--2-->');
    // const {testCount} = this.props.state;
    return null;
  }
  componentDidMount() {
    console.log('componentDidMount==4====>>>>');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate===>5');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate===>6');
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate===>7');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount===>8');
  }
  addCount = () => {
    let { testCount } = this.state;
    console.log(testCount);
    this.setState({
      testCount: ++testCount
    })
  }
  resetCount = () => {
    this.setState((state,props)=>{
      if(state.testCount == 0){
        return null
      }
      return {
        testCount:--state.testCount
      }
    })
  }
  render() {
    let {testCount} = this.state;
    console.log('render----3');
    return <div>
      <Button type='primary' onClick={this.addCount}>addCount</Button>
      <Button type='primary' onClick={this.resetCount} style={{ marginLeft: 20 }}>resetCount</Button>
      <div>{testCount}</div>
    </div>
  }
}
export default TestReact