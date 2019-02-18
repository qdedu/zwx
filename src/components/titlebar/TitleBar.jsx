import React, {Component} from 'react'
import './titlebar.less'

class TitleBar extends Component {

    constructor(props) {
        super(props)
    }

    onBackClick = () => {
        window.history.back()
    }

    render() {
        return (
            <div id='title-bar'>
                <img id='img-back' src='../../../public/static/img/ic_back.png' onClick={this.onBackClick}></img>
                <span id='title' >{this.props.title}</span>
                <span id='right-text' onClick={this.props.onRightClick}>{this.props.rightText}</span>
            </div>
        )
    }
}

export default TitleBar