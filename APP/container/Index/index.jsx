/**
 * Created by boli on 2017/5/18.
 */
import React,{Component}from 'react';
import PageHeader from '../../container/component/pageHeader/PageHeader'
import Banner from '../../container/component/banner/Banner';
import Activity from './Activity';
import Product from '../../container/component/product/Product'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Action from '../../actions/Home';
class Index extends React.Component{
    componentDidMount(){
        this.props.Actions.index('./data/index.json')
        document.body.scrollTop=0;
    }
    static defaultProps={
        banner:[],
        activity:[],
        item:[]
    }
    render(){
        const {banner,activity,item}=this.props
        return(
            <div className="view">
                <PageHeader/>
                <div className="container p-t-40">
                    <Banner banner={banner}/>
                    <Activity activity={activity}/>
                    <Product grid={false} item={item}/>
                </div>
            </div>
        )
    }
}
function mapStatePorps(state) {
    return{
        banner:state.Home.banner,
        activity:state.Home.activity,
        item:state.Home.data
    }
}
function mapDistachToProps(dispatch) {
    return{
        Actions:bindActionCreators(Action,dispatch)
    }
}
export default connect(mapStatePorps,mapDistachToProps)(Index)