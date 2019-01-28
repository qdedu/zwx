import React, {Component} from 'react'
import propTypes from 'prop-types'

import './less/user.less'

export default class extends Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps){
    }

    shouldComponentUpdate(nextProps, nextState){
    }

    componentDidUpdate(prevProps, prevState){
    }

    handleClick(){

    }

    /*计算属性*/

    render() {

        return (
            <div className="people-item flex-horizon-center">
                <img onError={(e)=>e.target.src="static/img/my/default.png"} src={this.props.userImg} alt="" />
                <span className="true-name subordinate-title nowrap">{this.props.trueName}</span>
            </div>
        )
    }
}