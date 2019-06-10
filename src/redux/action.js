import * as ActionTypes  from './actionTypes.js';
const increase = (counterCaption)=>{
    return {
        type:ActionTypes.INCREAMENT,
        counterCaption:counterCaption
    }
};
const decrease = (counterCaption)=>{
    return {
        type:ActionTypes.DECREAMENT,
        counterCaption:counterCaption
    }
};
export default {
    increase,
    decrease
};

