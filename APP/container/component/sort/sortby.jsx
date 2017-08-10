/**
 * Created by boli on 2017/5/18.
 */
import React, {Component} from 'react';
import PureRender from 'react-addons-pure-render-mixin';
export default class sortby extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRender.shouldComponentUpdate.bind(this)
        this.state = {
            selectActive: 0,
            sortType: 1
        }
    }

    sortTimes(i) {
        let {sortType}=this.state;
        let sortTypes;
        if(i===1 || i===4){
            sortTypes=1
            this.setState({
                selectActive: i,
                sortType: 1
            })
        }else{
            if (sortType == 1) {
                this.setState({
                    selectActive: i,
                    sortType: 0
                })
                sortTypes=0
            }else{
                this.setState({
                    selectActive: i,
                    sortType: 1
                })
                sortTypes=1
            }
        }

        this.props.sortBy(i,sortTypes)

    }

    render() {
        const {selectActive, sortType}=this.state;
        return (
            <div className="sort-box">
                <ul className="sort">
                    <li className={selectActive === 1 ? 'active' : ''} onClick={this.sortTimes.bind(this, 1)}>综合</li>
                    <li className={selectActive === 2 ? 'active' : ''} onClick={this.sortTimes.bind(this, 2)}>
                        人气
                        <span className={sortType === 1 ? 'sort-arrow up' : 'sort-arrow down'}>
                        <i className="arrow-up"></i>
                        <i className="arrow-dowm"></i>
                    </span>
                    </li>
                    <li className={selectActive === 3 ? 'active' : ''} onClick={this.sortTimes.bind(this, 3)}>时间
                        <span className={sortType === 1 ? 'sort-arrow up' : 'sort-arrow down'}>
                        <i className="arrow-up"></i>
                        <i className="arrow-dowm"></i>
                    </span>
                    </li>
                    <li className={selectActive === 4 ? 'active' : ''} onClick={this.sortTimes.bind(this, 4)}>原创</li>
                </ul>
            </div>
        )
    }
}