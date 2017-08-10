/**
 * Created by boli on 2017/5/18.
 */
import React,{Component} from 'react';
import PureRender from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';
export default class Product extends React.Component{
    static propTypes={
        item:React.PropTypes.Array,
        grid:React.PropTypes.Boolean
    }
    constructor(props,content){
        super(props,content)
        //this.shouldComponentUpdate=PureRender.shouldComponentUpdate.bind(this)
    }
    shouldComponentUpdate(nextProps,nextState){
         if(nextProps==this.props){
            return false
        }else{

            return true;
        }
    }
    render(){
        const {grid,item}=this.props;
        let itemList
        if(item){
            itemList=item.map((item,i)=>{
                return (
                    <div className="product">
                        <div className="img">
                            <Link to={"/detail/"+item.id+"/"+item.jsonName}>
                                <svg viewBox="0 0 86 86" width="43" height="43" className="icon-video">
                                    <use xlinkHref="/static/icon.svg#svg-video"></use>
                                </svg>
                                <img src={item.image}/>
                            </Link>
                        </div>
                        <p className="title"><Link to={"/detail/"+item.id+"/"+item.jsonName}>{item.title}</Link></p>
                        <p className="label-box">
                            <span className="view"><svg viewBox="0 0 24 24" width="12" height="12"><use xlinkHref="/static/icon.svg#svg-view"/></svg>{item.view}</span>
                            <span className="time"><svg viewBox="0 0 24 24" width="12" height="12" ><use xlinkHref="/static/icon.svg#svg-time"/></svg>{item.time}</span>
                        </p>
                    </div>
                )
            })
        }

        return(
            <div className={grid?"product-box product-list-grid p-t-15":"product-box m-t-10 p-t-15"}>
                {itemList}
            </div>
        )
    }
}