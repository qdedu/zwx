import React from "react"
import PropTypes from 'prop-types';
import './less/inputBox.less'

 class InputBox extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    userpwd: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="input-box">
        <div className="user-name">
            <i className="iconfont man-copyuuu-copy icon-name">&#xe6ff;</i>
          <input
            type="text"
            name="childName"
            placeholder="请输入学生账号"
            value={this.props.username}
            onChange={this.props.update}
          />
        </div>
        <div className="user-pwd">
            <i className="iconfont icon icon-passad">&#xe62e;</i>
          <input
            type="password"
            name="childPwd"
            placeholder="请输入密码"
            value={this.props.userpwd}
            onChange={this.props.update}
          />
        </div>
      </div>
    )
  }
}
export default InputBox