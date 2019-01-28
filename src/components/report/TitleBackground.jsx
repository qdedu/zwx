import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/TitleBackground.less'

export default class TitleBackground extends Component {

    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }


    handleClick = () => e => {

    }

    /*计算属性*/

    render() {
        return (
            <div>
                <span className="border-bottom"></span>
                <i className="iconfont lingxing">&#xe62d;</i>
                <span className="month-title">{this.props.carrier}</span>
                <i className="iconfont lingxing">&#xe62d;</i>
                <span className="border-bottom"></span>
            </div>
        );
    }
}
