/**
 * Created by boli on 2017/5/18.
 */
import 'es6-promise';
import 'es5-shim';
import 'es5-shim/es5-sham';
import React,{Component} from 'react';
import {render} from 'react-dom'
import {Router,browserHistory} from 'react-router'
import router from './router/index';
import './assets/css/style.css';
//redux start
import {Provider} from 'react-redux';
import configStore from './store/configStore';
import { syncHistoryWithStore } from 'react-router-redux';
const store=configStore();
const history = syncHistoryWithStore(browserHistory, store);
//redux end
export default class Main extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router history={history} routes={router}/>
            </Provider>
        )
    }
}
render(
    <Main/>,document.getElementById('APP')
)

