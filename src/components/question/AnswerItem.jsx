import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { WhiteSpace } from 'antd-mobile'
import './less/AnswerItem.less'

class AnswerItem extends Component {
    static propTypes ={
        item: PropTypes.object,
        resource: PropTypes.element,
    }
    constructor(props) {
        super(props);
        this.state = {
            answerPraise : false,
        }
        this.answerPraise = this.answerPraise.bind(this);
    }
    answerPraise(){

        if(this.state.answerPraise===true){
            this.props.item.approve--;
        }else{
            this.props.item.approve++;
        };
        this.setState({answerPraise : !this.state.answerPraise,})
    }
    render() {
        const isTeacher = this.props.item.from == 'teacher'?true:false
        const isStudent = this.props.item.from == 'student'?true:false
        const isOwn = this.props.item.from == 'own'?true:false
        return (
            <div className="answer-item time-title">
                <div className="answer-author">
                    <i className={'iconfont man-copyuuu-copy '+(!isTeacher?'not-active':'')}>&#xe6ff;</i>
                    <span className={'answer-author-teacher '+(!isTeacher?'not-active':'')}>教师解答</span>
                    <span className={'answer-author-student '+(!isStudent?'not-active':'')}>学生解答</span>
                </div>
                <div className="answer-detail">
                    <img src="static/img/1.jpg" alt="" className="portrait-image" />
                    <span className="author-name">{this.props.item.name}</span>
                    <div className={isOwn?"delete-btn":"not-active"}>删除</div>
                    <p className="answer-text first-content">{this.props.item.content.text}</p>
                    {this.props.resource}
                    <div className={this.state.answerPraise?"answer-praise color-green-tag":"answer-praise"} onClick={this.answerPraise}>
                        <i className="iconfont icon_zan">&#xe68b;</i>
                        <span className="praise-people">{this.props.item.approve}</span>
                    </div>
                    <span className="publish-time">{this.props.item.date}</span>
                </div>
            </div>

        )
    }
}
 
export default AnswerItem;