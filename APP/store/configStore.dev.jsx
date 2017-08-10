/**
 * Created by boli on 2017/5/18.
 */
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
const router = routerMiddleware(browserHistory);
export default function configStroe(initialState) {
    const store=createStore(
        rootReducer,
        initialState,
        //applyMiddleware(thunk),
        compose(applyMiddleware(thunk,router),window.devToolsExtension?window.devToolsExtension():undefined)
    )
    return store
}