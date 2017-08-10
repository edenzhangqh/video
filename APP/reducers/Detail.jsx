/**
 * Created by boli on 2017/5/18.
 */
import * as actionType from '../constants/index'
const initialState = {};
export const Detail=(state=initialState,action)=>{
    switch (action.type){
        case actionType.DETAIL:
            return action.payload;
        default:
            return state

    }
}