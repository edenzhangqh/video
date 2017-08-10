/**
 * Created by boli on 2017/5/18.
 */
import * as actionType from '../constants/index'
const initialState={}
export const Activity=(state=initialState,action)=>{
    switch(action.type){
        case actionType.ACTIVITY:
            return Object.assign({},state,action.payload)
        default:
            return state
    }
}