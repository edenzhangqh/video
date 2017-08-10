/**
 * Created by boli on 2017/5/18.
 */
import React, {Component} from 'react';
import PureRender from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router'
export default class Banner extends React.Component {
    static propTypes = {
        banner: React.PropTypes.Array
    };

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRender.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        const {banner}=this.props;
        const opt = {
            aotu: 5000,
            callback: (index) => {
                this.setState({index: index})
            }
        }
        let bannerList;
        bannerList = banner.map((item, i) => {
            return (
                <li key={"banner" + i}><Link to={item.link + "/" + item.id}><img src={item.image}/></Link></li>
            )
        })
        return (
            <div className="banner">
                <ul>
                    <ReactSwipe className="carousel" key={banner.length} swipeOptions={opt}>
                        {bannerList}
                    </ReactSwipe>
                </ul>
            </div>
        )
    }
}