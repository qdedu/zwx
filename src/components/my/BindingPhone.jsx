import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Toast } from 'antd-mobile';
import './less/BindingPhone.less'

export default class BindingPhone extends Component {

    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {

        }
        this.success = this.success.bind(this)
    }

    success () {
        if(!(/^1[34578]\d{9}$/.test(this.refs.username.value))){
            Toast.info('手机号码格式不正确', 2)

        } else if (this.refs.username.value == ''){
            Toast.info('请输入手机号码', 2)
        } else {
            this.props.success()
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="phone">
                <div className="phone-item">
                    <label htmlFor="">手机号：</label>
                    <input
                        ref = "username"
                        type="text"
                        className="input-phone"
                        placeholder="请正确输入11位手机号码"
                    />
                </div>
                <div className="phone-item">
                    <label htmlFor="">验证码：</label>
                    <input
                        type="text"
                        className="input-phone input-phone-code"
                    />
                    <button className="get-code" onClick = {this.success}>获取短信码</button>
                </div>
                <span>提示：验证信息可能会有一定延迟，请耐心等待哦</span>
            </div>
        );
    }
}
