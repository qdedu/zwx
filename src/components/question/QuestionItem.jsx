import React from 'react'
import './less/QuestionItem.less'

class QuestionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswer:false,
            a: 1,
            name: "陈欣",
            myClass:"初中2016级1班",
            time: "今天 19:25",
        }
    }
    render() {
        return ( 
            <div className="question-item">
                <div className="header color-default-bg">
                    <span className={this.state.isAnswer?"solve-state solve-not-answer":"solve-state color-red-tag-bg"}>{this.state.isAnswer?"已解答":"待解答"}</span>
                    <span className="subject clear-both">历</span>
                </div>
                <div className="question-content color-default-bg">
                    <div className="question-info">
                        <img className="my-head" src="static/img/1.jpg" alt=""/>
                        <span className="question-name second-title">{this.state.name}</span>
                        <span className="question-myClass time-title">{this.state.myClass}</span>
                        <span className="question-time time-title">{this.state.time}</span>
                    </div>
                    <div className="my-question">
                        <span className="my-question-info second-title">
                            {this.props.item && this.props.item.content.text}
                        </span>
                        {this.props.resource}
                    </div>
                </div>
                <div className="footer color-default-bg">{this.props.left}</div>
            </div>
        )
    }
}
 
export default QuestionItem;
