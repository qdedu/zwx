import React, {Component} from 'react';
import "../../less/skin.less"
import "./less/score.less"

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleClick (index) {
    }

    componentDidMount() {
    }
    render(){
        return (
            <div className="score-box">
                <div className="score">
                    <div className="count">
                        <div className="title">成&nbsp;&nbsp;绩</div>
                        <div className="content">
                            <span className="correct">{this.props.examScore.correctCount}</span>
                            <span className="total">/{this.props.examScore.totalQuestion}</span>
                        </div>
                    </div>
                </div>
                <div className='detail'>
                        {
                            (this.props.examScore && this.props.examScore.examQuestionAnalysis || []).map((item, index) =>{
                                if(item.isShow){
                                    return (
                                        <div className={item.isCorrect?"correctBg item":"errorBg item"} key={item.questionId}>
                                            <div className="number">{index+1}</div>
                                        </div>
                                    )
                                }
                            })
                        }

                    {this.props.examScore.examQuestionAnalysis && this.props.examScore.examQuestionAnalysis.length>10 &&
                        <div className="more-style" onClick={this.props.onClickLoadMore}>
                            <img src="static/img/zhankaigengduo.png" alt=""/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default Score