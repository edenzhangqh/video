/**
 * Created by boli on 2017/5/18.
 */
import React,{Component} from 'react';
import PureRender from 'react-addons-pure-render-mixin';
export default class BottomBar extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate=PureRender.shouldComponentUpdate.bind(this)
    }
    render(){
        const {link,view,comment,collect}=this.props.detail
        return(
            <div className="shop-box">
                <div className="view">
                    <p className="svg">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <use xlinkHref="/static/icon.svg#svg-view"></use>
                        </svg>
                    </p>
                    {view}
                </div>
                <div className="comment">
                    <p className="svg">
                        <svg viewBox="0 0 42 42" width="20" height="20">
                            <use xlinkHref="/static/icon.svg#svg-comment"></use>
                        </svg>
                    </p>
                    {comment}
                </div>
                <div className="collect">
                    <p className="svg">
                        <svg viewBox="0 0 42 42" width="20" height="20">
                            <use xlinkHref="/static/icon.svg#svg-collect"></use>
                        </svg>
                    </p>
                    {collect}
                </div>
                <a className="shop-btn" href={link} target="_blank">去天猫购买</a>
            </div>
        )
    }

}