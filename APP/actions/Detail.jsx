/**
 * Created by boli on 2017/5/18.
 */
import * as actionType from '../constants/index'
import {cFetch} from '../utils/cFetch'
export const Detail=(url,arg)=>{
        return dispatch=>{
            cFetch(url,arg).then(res=>{
                    dispatch({
                        type:actionType.DETAIL,
                        payload:res
                    })
                }
            )
        }
}