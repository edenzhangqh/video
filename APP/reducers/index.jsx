/**
 * Created by boli on 2017/5/18.
 */
import {combineReducers} from 'redux'
import {Index} from './Home';
import {Product} from './Product'
import {Detail} from './Detail'
import {recommend} from './recommend'
import { routerReducer } from 'react-router-redux';
import {Activity} from './activity'
const rootReducers=combineReducers({
    routing:routerReducer,
    Home:Index,
    Product:Product,
    Detail:Detail,
    recommend:recommend,
    Activity:Activity
})
export default rootReducers;
