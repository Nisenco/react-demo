import * as ActionTypes  from './actionTypes.js';
export const increase = (counterCaption)=>{
    return {
        type:ActionTypes.INCREAMENT,
        counterCaption:counterCaption
    }
};
export const decrease = (counterCaption)=>{
    return {
        type:ActionTypes.DECREAMENT,
        counterCaption:counterCaption
    }
};
