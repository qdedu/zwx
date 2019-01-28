import React, {Component} from 'react';
import { Progress } from 'antd-mobile'
import "./less/detailAssessment.less"
import "../../less/skin.less"

class  DetailAssessment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
    }

    render(){
        let progressGoodStyle={
             "progress-box":true,
             "progress-good":true
        }
        let progressGeneralStyle={
            "progress-box":true,
            "progress-general":true
        }
        let progressBadStyle={
            "progress-box":true,
            "progress-bad":true
        }
        return (
            <div className="ability-assessment">
                {
                    this.props.accuracy  && this.props.accuracy.map((item)=>
                        <div className="assessment-item" key={item.itemId}>
                            <div className="assessment-content">{item.displayName}</div>
                            <div className="show-info">
                                <div className={item.studentAccuracy<=100 && item.studentAccuracy>=80?
                                    classnames(progressGoodStyle):
                                    item.studentAccuracy<=79 && item.studentAccuracy>50?
                                    classnames(progressGeneralStyle):
                                    classnames(progressBadStyle)}>
                                    <Progress className="progress"
                                              percent={item.studentAccuracy}
                                              position="normal"
                                    />
                                </div>
                                <div aria-hidden="true" className="percent-box">正确率：
                                    {item.studentAccuracy}%
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default DetailAssessment