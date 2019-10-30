import React, {PureComponent} from 'react';
class  ClickCounter extends PureComponent{
    constructor(props){
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state={
            count:0
        }
    }
    onClickButton(){
        this.setState({
            count:this.state.count +1
        })
    }
    render() {
        const {count} = this.state;
        return (<div>
            <button onClick={this.onClickButton}>点击</button>
            <div>
                click count:{count}
            </div>
        </div>)
    }
}
export default ClickCounter;
