/**
 * Created by boli on 2017/5/18.
 */
import React, {Component} from 'react';
import PureRender from 'react-addons-pure-render-mixin';
import {browserHistory} from 'react-router'
export  default class Video extends React.Component {
    static propsTypes = {
        detail: React.PropTypes.Object
    }

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRender.shouldComponentUpdate.bind(this)
    }

    backTo() {
        browserHistory.go(-1);
    }

    render() {
        let {src,image}=this.props.detail;
        return (
            <div className="detail-video" style={{"zIndex": 10}}>
            <span className="backto" onClick={this.backTo.bind(this)}>
                <svg viewBox="0 0 34 34" width="17" height="17" className="svg">
                    <use xlinkHref="/static/icon.svg#svg-back-to"></use>
                </svg>
            </span>
                <span className="share">
                <svg viewBox="0 0 34 34" width="17" height="17" className="svg">
                    <use xlinkHref="/static/icon.svg#svg-share"></use>
                </svg>
            </span>
                <video ref="video" autoplay="true"  poster={image} webkit-playsinline="true" playsinline="true" src={src} width="100%" height="100%" controls="controls" id="video_url" x5-video-player-type="h5" x5-video-player-fullscreen="true"></video>'
            </div>
        )
    }
}