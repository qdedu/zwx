import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/qCode.less'

export default class qCode extends Component {

    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }

    handleClick = () => e => {

    }

    /*计算属性*/

    render() {
        return (
            <div className="q-code-conter">
                <div className="q-top">
                    <img src="" alt=""/>
                    <span>{this.props.data}</span>
                </div>
                <div className="top-code">
                    <i className="iconfont erweima code-img">&#xe612;</i>
                </div>
                <p className="text-code">扫一扫上面的二维码图案，加我为好友吧~~</p>
            </div>
        );
    }
}
