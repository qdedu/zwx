import React, {Component} from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

import './less/NotifyItem.less'

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
            <div className="notify-item">
                <Link to={"/notify/teacher/detail/notifyId="+this.props.notifyId}>
                    <div className="notify-content">
                        <img src={require(`./img/notify-icon.png`)} alt=""/>
                        <span className="notify-info second-title ellipsis">{this.props.info}</span>
                        <div className="notify-box subordinate-title">
                            <span>{this.props.time}</span>
                            <span>{this.props.trueName}等等</span>
                            <span>{this.props.trueName}布置</span>
                            <span className="notify-unread">{this.props.isRead}尚未被阅读</span>
                            <span className="notify-isread">{this.props.isRead}已读</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}