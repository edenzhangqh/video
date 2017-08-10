/**
 * Created by boli on 2017/5/18.
 */
import * as actionTYpe from '../constants/index'
const initialState = {};
export const Index=(state=initialState,action)=>{
    switch (action.type){
        case actionTYpe.INDEX:
            return action.payload
        default:
            return state
    }
}