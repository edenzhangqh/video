/**
 * Created by boli on 2017/5/18.
 */
import {Route,IndexRoute} from 'react-router';
const APP=(nextState,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./app').default)
    },'Index')
};
//首页
const Index=(nextState,cb)=>{
    require.ensure([],require=>{
        cb(null,require('../container/Index/index').default)
    },'Index')
}

//产品列表
const Product=(nextState,cb)=>{
    require.ensure([],require=>{
        cb(null,require('../container/Product/APP').default)
    },'Product')
}
//产品列表
const ProductList=(nextState,cb)=>{
    require.ensure([],require=>{
        cb(null,require('../container/Product/index').default)
    },'Product')
}
//产品详情
const Detail=(nextState,cb)=>{
    require.ensure([],require=>{
        cb(null,require('../container/Detail/APP').default)
    },'Detail')
}
const DetailPage=(nextState,cb)=>{
    require.ensure([],require=>{
        cb(null,require('../container/Detail/index').default)
    },'Detail')
}
//活动页
const Activity=(nextState,cb)=>{
    require.ensure([],require=>{
        cb(null,require('../container/Activity/APP').default)
    },'Activity')
}
const ActivityPage=(nextState,cb)=>{
    require.ensure([],require=>{
        cb(null,require('../container/Activity/index').default)
    },'Activity')
}
const router=(
    <Route path="/" getComponent={APP}>
        <IndexRoute getComponent={Index}/>
        <Route path="/product/" getComponent={Product}>
            <Route path=":id" getComponent={ProductList}/>
        </Route>
        <Route path="/detail/" getComponent={Detail}>
            <Route path=":id(/:json)" getComponent={DetailPage}/>
        </Route>
        <Route path="/activity/" getComponent={Activity}>
            <Route path=":id(/:json)" getComponent={ActivityPage}/>
        </Route>
    </Route>
);
export default router