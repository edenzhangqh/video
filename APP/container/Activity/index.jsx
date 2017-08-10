/**
 * Created by boli on 2017/5/18.
 */
import React,{Component} from 'react';
import PageHeader from '../../container/component/pageHeader/PageHeader'
import Banner from '../../container/component/banner/Banner';
import Product from '../../container/component/product/Product';
import SortBy from '../../container/component/sort/sortby';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Activitys from '../../actions/Activity'
class index extends React.Component{
    static defaultProps={
        item:[],
        banner:[]
    }
    constructor(props){
        super(props)
    }
    componentDidMount(){
        document.body.scrollTop = 0;
        const {id}=this.props.params
        const url = "/data/" + id + ".json";
        this.props.Action.Activity(url)
    }
    sortBy(type, sortBy) {
        let types,
            sortType;
        if (type === 1) {
            types = "id"
        } else if (type === 2) {
            types = "view"
        } else if (type === 3) {
            types = "timeSort"
        } else {
            types = "original"
        }
        if (sortBy === 1) {
            sortType = "down"
        } else {
            sortType = "up"
        }
        this.props.Action.sortTime(types, sortType)
    }
    render(){
        const {item,banner}=this.props
        return(
            <div className="view">
                <PageHeader/>
                <div className="container p-t-40">
                    <Banner banner={banner}/>
                    <SortBy sortBy={this.sortBy.bind(this)}/>
                    <Product grid={true} item={item}/>
                </div>
            </div>
        )
    }
}
function mapStateProps(state) {
    return{
        banner:state.Activity.banner,
        item:state.Activity.data
    }
}
function mapDispatchToProps(dispatch) {
    return{
        Action:bindActionCreators(Activitys,dispatch)
    }
}
export  default connect(mapStateProps,mapDispatchToProps)(index)