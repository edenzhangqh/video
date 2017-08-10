/**
 * Created by boli on 2017/5/18.
 */
import * as actionType from '../constants/index'
const initialState = {};
export const Product=(state=initialState,action)=>{
    switch (action.type){
        case actionType.PRODUCT:
            return Object.assign({},state, action.payload)
            //return action.payload
        default:
            return state
    }
}