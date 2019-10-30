<<<<<<< HEAD
import React, { PureComponent } from "react";
class Tabs extends PureComponent {
    constructor(props){
        super(props);
        const currProps = this.props;
        let activeIndex = 0;
        if('activeIndex' in currProps){
            activeIndex = currProps.activeIndex;
        }else if('defaultActiveIndex' in currProps){
            activeIndex = currProps.defaultActiveIndex
        }
        this.setState = {
            activeIndex,
            prevIndex = activeIndex,
        }
    }

    getTabPanes(){
        const { classPrefix, activeIndex,panels,isActive } = this.props;
        return 
    }

    render(){
        return <div>

        </div>
    }
}

export default Tabs;
=======
import React,{PureComponent} from 'react';
class Tabs extends PureComponent{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (<div>
            <div class="tabs-bar" role="tablist">
                <ul class="tabs-nav">
                    <li role="tab" class="tabs-tab">Tab 1</li>
                    <li role="tab" class="tabs-tab">Tab 2</li>
                    <li role="tab" class="tabs-tab">Tab 3</li>
                </ul>
            </div>
            <div class="tabs-content">
                <div role="tabpanel" class="tabs-panel">
                    第一个 Tab 里的内容
                </div>
                <div role="tabpanel" class="tabs-panel">
                    第二个 Tab 里的内容
                </div>
                <div role="tabpanel" class="tabs-panel">
                    第三个 Tab 里的内容
                </div>
            </div>
        </div>)
    }
}
export default Tabs;
>>>>>>> 6763dad793fd4bbae692b9b22080f03477cd4b48
