import React, {Component} from 'react'
import propTypes from 'prop-types'
import './less/ReplyItem.less'

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
            <div className="reply-item">
                <div className="reply-author">
                    <span>{this.props.trueName}回复</span>
                </div>
                <div className="reply-info">{this.props.info}</div>
            </div>
        );
    }
}