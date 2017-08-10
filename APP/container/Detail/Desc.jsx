/**
 * Created by boli on 2017/5/18.
 */
import React,{Component} from 'react';
import PureRender from 'react-addons-pure-render-mixin';
export default class Desc extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate=PureRender.shouldComponentUpdate.bind(this)
    }
    render(){
        const {title,price,sales,desc}=this.props.detail
        return(
            <div>
                <div className="detail-info">
                    <h1 className="title"><span className="i-tmall"></span>{title}</h1>
                    <div className="price-box">
                        <p className="price"><span>&yen;</span>{price}</p>
                        <p className="sales">已售<span>{sales}</span>件</p>
                    </div>
                </div>
                <div className="detail-desc">
                    <p className="title">为啥好</p>
                    <div className="desc-box">
                        {desc}
                    </div>
                </div>
                <div className="recommend">
                    <p className="title">热门视频</p>
                </div>
            </div>
        )
    }
}