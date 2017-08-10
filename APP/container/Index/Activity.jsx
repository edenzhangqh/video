/**
 * Created by boli on 2017/5/18.
 */
import React, {Component} from 'react';
import PureRender from 'react-addons-pure-render-mixin';
import {Link} from 'react-router'
export default class Activity extends React.Component {
    static propsTypes = {
        activity: React.PropTypes.Array
    }

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRender.shouldComponentUpdate.bind(this)
    }

    render() {
        const {activity}=this.props
        let activityList;
          activityList = activity.map((item, i) => {
                return (
                    <li key={"activity"+i}><Link to={item.link + "/" + item.id}><img src={item.image}/></Link></li>
                )
            })
        return (
            <div className="activity">
                <ul>
                    {activityList}
                </ul>
            </div>
        )
    }
}