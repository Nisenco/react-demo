import * as ActionTypes from './actionTypes.js';

export default (state,action)=>{
    const {counterCaption} = action;
    switch(action.type){
        case ActionTypes.INCREAMENT:
            return {...state,[counterCaption]:state[counterCaption] +1};
        case ActionTypes.DECREAMENT:
            return {...state,[counterCaption]:state[counterCaption]-1};
        default:
            return state;
    }
}
