import React, {Component} from 'react';
import { Progress } from 'antd-mobile';
import "./less/generalAssessment.less"
import "../../less/skin.less"

class GeneralAssessment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    choseProgressStyle (accuracy){
        let obj={
            'progress-box':true,
            'progress-good':accuracy>=80 && accuracy<=100,
            'progress-general':accuracy>50 && accuracy<=79,
            'progress-bad':accuracy>=0 && accuracy<=50
        }
        return obj;
    }
    render(){
        return (
            <div className="general-assessment">
                {
                    this.props.assessment && this.props.assessment.map((item,index)=>
                        <div className="assessment-item" key={Math.random(0,100)}>
                            <div className="assessment-title">{item.name}</div>
                            <div className="content">
                                {item.displayName}
                            </div>
                            <div  className={classnames(this.choseProgressStyle(item.studentAccuracy))}>
                                <Progress className="progress"
                                          percent={item.studentAccuracy}
                                          position="normal"
                                />
                            </div>
                            <div className="percent-box">掌握：
                                {item.studentAccuracy}%
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default GeneralAssessment