/**
 * Created by boli on 2017/5/18.
 */
import React,{Component} from 'react';
import PureRender from 'react-addons-pure-render-mixin';
import Video from './Video'
import Desc from './Desc'
import Product from '../../container/component/product/Product'
import BottomBar from './BottomBar'
//redux state
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Action from '../../actions/Detail';
import * as Recommend from '../../actions/Recommend';
//redux end
class Index extends React.Component{
    static defaultProps={
        data:[],
        item:[]
    }
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate=PureRender.shouldComponentUpdate.bind(this)
    }
    componentDidMount(){
        document.body.scrollTop=0;
        const {json}=this.props.params
        const url="/data/"+json+".json";
        this.props.Actions.Detail(url);
        const RecommendURL="/data/recommend.json";
        this.props.RecommendAction.Recommend(RecommendURL)
    }
    render(){
        let detail={};
        let {id}=this.props.params;
        this.props.data.map((item,i)=>{
            if(id==item.id){
                detail=item
            }
        })
        let {item}=this.props
        return(
            <div className="view">
                <div className="container m-b-50">
                    <Video detail={detail}/>
                    <Desc detail={detail}/>
                    <Product grid={true} item={item}/>
                    <BottomBar detail={detail}/>
                </div>
            </div>
        )
    }
}
function mapStateProps(state) {
    return{
        data:state.Detail.data,
        item:state.recommend.data
    }
}
function mapDispatchToProps(dispatch) {
    return{
        Actions:bindActionCreators(Action,dispatch),
        RecommendAction:bindActionCreators(Recommend,dispatch)
    }
}
export default connect(mapStateProps,mapDispatchToProps)(Index)