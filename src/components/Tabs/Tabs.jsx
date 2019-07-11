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
