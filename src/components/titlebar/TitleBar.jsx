import React, {Component} from 'react'
import './titlebar.less'

class TitleBar extends Component {

    constructor(props) {
        super(props)
    }

    onBackClick = () => {
        if (!this.props.isCanBack)
            window.history.back()
    }

    render() {
        return (
            <div id='title-bar'>
                <img id='img-back' src='../../../public/static/img/ic_back.png'
                     onClick={this.props.isCanBack
                         ? this.props.onLeftClick
                         : this.onBackClick}></img>
                <span id='title'>{this.props.title}</span>
                <img id='right-text' onClick={this.props.onRightClick} src={this.props.rightImgPath}/>
                <span id='right-text' onClick={this.props.onRightClick}>{this.props.rightText}</span>
            </div>
        )
    }
}

export default TitleBar