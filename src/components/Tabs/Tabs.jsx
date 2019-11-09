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
