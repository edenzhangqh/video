/**
 * Created by boli on 2017/5/18.
 */
import React,{Component} from 'react';
export default class APP extends React.Component{
    render(){
        return(
            <div className="position" key={ this.props.location.pathname}>{this.props.children}</div>        )
    }
}