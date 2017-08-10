/**
 * Created by boli on 2017/5/18.
 */
import React, {Component} from 'react';
import PageHeader from '../../container/component/pageHeader/PageHeader';
import Banner from '../../container/component/banner/Banner';
import SortBy from '../../container/component/sort/sortby';
import Product from '../../container/component/product/Product'
//redux start
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Action from '../../actions/Product';
//redux end
class index extends React.Component {
    static defaultProps = {
        item: [],
        banner: []
    }

    constructor(props) {
        super(props)
        this.state = {
            item: [],
            loading: false
        }
    }

    componentDidMount() {
        document.body.scrollTop = 0;
        const {id}=this.props.params
        const url = "/data/product_" + id + ".json";
        this.props.Actions.Product(url)
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
        this.props.Actions.sortTime(types, sortType)
    }

    render() {
        const {id}=this.props.params;
        const {item, banner}=this.props;
        return (
            <div className="view">
                <PageHeader id={id}/>
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
    return {
        item: state.Product.data,
        banner: state.Product.banner
    }
}
function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(Action, dispatch)
    }
}
export default connect(mapStateProps, mapDispatchToProps)(index);