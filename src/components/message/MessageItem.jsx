import React, {Component} from 'react'
import propTypes from 'prop-types'
import './less/MessageItem.less'

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
            <div className="message-item">
                <img src={this.props.userImg} alt=""/>
                <div className="message-right second-title">
                    <span className="message-name">{this.props.trueName}</span>
                    <span className="message-reply">回复</span>
                    <span className="message-time">{this.props.time}</span>
                    <div className="message-intro">{this.props.info}</div>
                </div>
            </div>
        );
    }
}