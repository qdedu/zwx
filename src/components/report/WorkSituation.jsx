import React from "react"
import './less/WorkSituation.less'
class WorkSituation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return(
        <div className="workSituation">
            <div className="work-situation">
                <span className="work-situation-list">
                    <span>23<ins>道</ins></span>
                    <span>做题量</span>
                </span>
                <span className="work-situation-list">
                    <span>70%</span>
                    <span>正确率</span>
                </span>
                <span className="work-situation-list">
                    <span>2<ins>份</ins></span>
                    <span>按时完成量</span>
                </span>
            </div>
        </div>
        )
    }
}
 
export default WorkSituation;