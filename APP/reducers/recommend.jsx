/**
 * Created by boli on 2017/5/18.
 */
import * as actionType from '../constants/index'
const initialState = {};
export const recommend=(state=initialState,action)=>{
    switch (action.type){
        case actionType.RECOMMEND:
            return action.payload
        default:
            return state
    }
}