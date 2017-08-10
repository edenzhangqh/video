/**
 * Created by boli on 2017/5/18.
 */
import 'whatwg-fetch';
function check404(res) {
    if(res.status===404){
        return Promise.reject(res)
    }
    return res;
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        // 这里补充更多错误参数
        return response.text().then(errorMsg => {
            return new StandardError({
                statusCode: response.status,
                msg: errorMsg
            });
        }).then(err => { throw err; });
    }
}
function jsonParse(res) {
    return res.json();
}
export const cFetch=(url,options)=>{
    let getUrl=url
    const defaultOptions={
        method:'GET'
    }
    const opts=Object.assign({},defaultOptions,{...options})
    opts.headers={
        ...opts.headers,
        headers:{
            'Content-type':'application/x-www-form-urlencoded'
        }
    }
   return fetch(url,opts)
       .then(check404)
       .then(jsonParse)
}