import React ,{PureComponent} from 'react';
import {connect} from "react-redux";
import visibilityFilter from "../reducers/filterReducer";

class VisibilityFilter extends PureComponent{
    constructor(props){
        super(props);
    }

    render() {
        return(<div>

        </div>)
    }
}
// const mapStateToProps = (state)=>{
//     return {
//         visibilityFilter:state.visibilityFilter
//     }
// };
// const mapDispatchToProps = (dispatch)=>{
//     return {
//
//     }
// };
export default VisibilityFilter;
