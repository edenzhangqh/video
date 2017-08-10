/**
 * Created by boli on 2017/5/18.
 */
import React, {Component} from 'react'
import PureRender from 'react-addons-pure-render-mixin';
import {Link} from 'react-router'
export default class Banner extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRender.shouldComponentUpdate.bind(this);
        this.state = {
            i:0,
            startX: '',
            startY: '',
            endX: '',
            moveX:'',
            total:'',
            totalW:''
        }
    }
    componentDidMount(){
        let bannerList=this.refs.bannerList;
        bannerList.addEventListener("touchstart",this.touchStart.bind(this))
        bannerList.addEventListener("touchmove",this.touchMove.bind(this))
        bannerList.addEventListener("touchend",this.touchEnd.bind(this))
    }

    touchStart() {
        let touchObj=event.touches[0];
        let startX=touchObj.pageX;
        let startY=touchObj.pageY;
        this.setState({
            startX:startX,
            startY:startY
        })
    }
    touchMove(){
        event.preventDefault();
        let touchObj=event.touches[0];
        let endX=touchObj.pageX-this.state.startX;
        let moveX=Math.abs(endX);
        this.setState({
            endX:endX,
            moveX:moveX
        })
    }
    touchEnd(){
        let {endX,i,totalW}=this.state;
        let total=this.props.banner.length;
        let bannerList=this.refs.bannerList;
        let w = document.documentElement.clientWidth;
        let left = "-" + ((w * 0.5) + (w * 0.65));

        if(endX<0){
            i++;
            if(i<=total){
                let movew=Math.abs(parseInt(left))+parseInt((w * 0.65)*i);
                let style='width:'+totalW+'px;transform:translate('+-movew+'px,0);-webkit-transform:translate('+-movew+'px,0)';
                bannerList.style.cssText=style;
                this.setState({
                    i:i
                })
            }else{
                let movew=Math.abs(parseInt(left))+parseInt((w * 0.65));
                let style='width:'+totalW+'px;transform:translate('+-movew+'px,0);-webkit-transform:translate('+-movew+'px,0)';
                bannerList.style.cssText=style;
                this.setState({
                    i:1
                })
            }
        }else if(endX>0){
            i--;
            console.log(i);
            if(i<=-1){
                let movew=Math.abs(parseInt(left))+parseInt((w * 0.65)*i);
                let style='width:'+totalW+'px;transform:translate('+left+'px,0);-webkit-transform:translate('+left+'px,0)';
                bannerList.style.cssText=style;
                this.setState({
                    i:i
                })
            }else{
                let movew=Math.abs(parseInt(left))+parseInt((w * 0.65)*i);
                let style='width:'+totalW+'px;transform:translate('+-movew+'px,0);-webkit-transform:translate('+-movew+'px,0)';
                bannerList.style.cssText=style;
                this.setState({
                    i:i
                })
            }
        }
    }

    render() {
        const {banner}=this.props;
        let bannerDom;
        let w = document.documentElement.clientWidth;
        let left = "-" + ((w * 0.5) + (w * 0.65));
        let itemW = w * 0.66;
        if (banner) {
            let newBanner = [];
            const first = banner.slice(0, 2);
            const last = banner.slice((banner.length - 2), banner.length);
            let bannerList = newBanner.concat(last, banner, first);
            w = w * bannerList.length;
            this.setState({
                total: banner.length,
                totalW:w
            })

            bannerDom = bannerList.map((item, i) => {
                return (
                    <li className={i == this.state.i+2 ? "animate-li active" : "animate-li"} style={{width: itemW}}>
                        <div className="animate-box">
                            <Link to={item.link + "/" + item.id}><img src={item.image}/></Link>
                        </div>
                    </li>
                )
            })
        }
        return (
            <div className="product-banner clearfix">
                <ul ref="bannerList" className="banner-animate" style={{width: w, left:left}}>
                    {bannerDom}
                </ul>
            </div>
        )
    }
}
Banner.propsTypes = {
    banner: React.PropTypes.Array
}