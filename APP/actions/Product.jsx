/**
 * Created by boli on 2017/5/18.
 */
import * as actionType from '../constants/index';
import {cFetch} from '../utils/cFetch'
export const Product = (url, arg) => {
    return dispatch => {
        cFetch(url, arg).then(res => {
                dispatch({
                    type: actionType.PRODUCT,
                    payload: res
                })
            }
        )
    }
}
var tableSort={
    init:function (array,parm,sortby) {
        this.obj=array
        this.parm=parm
        this.b=sortby
    },
    sot:function () {
        var $this=this;
        var down=function (x,y) {
            return (eval("x." + $this.parm) < eval("y." + $this.parm)) ? -1 : 1
        }
        var up=function (x,y) {
            return (eval("x." + $this.parm) > eval("y." + $this.parm)) ? -1 : 1
        }
        if (this.b == "down") {
            this.obj.sort(down)
        }
        else {
            this.obj.sort(up)
        }
    }
}
function _temp() {
    this.init.apply(this,arguments)
}

export const sortTime = (type,sortType) => {
    return (dispatch, getState) => {
        let sort=getState().Product
        let data=Object.assign([],sort.data)
        _temp.prototype = tableSort;
        var sortBy= new _temp(data, "price", "down") //建立对象
        sortBy.init(data,type,sortType);//初始化参数更改
        sortBy.sot();
        let payload={"data":sortBy.obj};
       dispatch({
           type: actionType.PRODUCT,
           payload: payload
       })
    }
}