import React, {Component} from 'react'
import './less/test.less'
import PropTypes from 'prop-types'

export default class test extends Component {

		static PropTypes = {}

		static defaultProps = {}

		constructor(props) {
				super(props);
				this.setState({});
				this.handleClick = this.handleClick.bind(this)
		}

		componentDidMount() {

		}

		componentWillReceiveProps(nextProps) {

		}

		handleClick() {

		}

		/*计算属性*/

		render() {
				return (
					<div className=""></div>
				);
		}
}