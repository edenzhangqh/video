/**
 * Created by boli on 2017/5/18.
 */
import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router'
import PureRender from 'react-addons-pure-render-mixin';
export default class PageHeader extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate=PureRender.shouldComponentUpdate.bind(this)
    }
    render(){
        const {id}=this.props;
        return(
            <div className="header">
                <ul>
                    <li><IndexLink activeClassName="active" to="/">精选</IndexLink></li>
                    <li><Link className={id==1?'active':''}  to={"/product/1"}>服饰</Link></li>
                    <li><Link className={id==2?'active':''}  to={"/product/2"}>美妆</Link></li>
                    <li><Link className={id==3?'active':''}  to={"/product/3"}>居家</Link></li>
                    <li><Link className={id==4?'active':''}  to={"/product/4"}>包包</Link></li>
                </ul>
            </div>
        )
    }
}