import React, {Component} from 'react'
import propTypes from 'prop-types'

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

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    handleClick(){

    }

    /*计算属性*/

    render() {

        return (
            <div className="rich-text wrap">
               {this.props.content}
            </div>
        )
    }
}