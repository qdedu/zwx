import React from "react"
import "./less/SelfStudy.less"
class SelfStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return(
        <div>
            <div>
                <span className="learning-statistics">
                 <h1>230<span>道</span></h1>
                 <h2>做题量</h2>
                </span>
                <span className="learning-statistics">
                    <h1>70%</h1>
                    <h2>正确率</h2>
                </span>
                <span className="learning-statistics">
                 <h1>28<span>天</span></h1>
                 <h2>学习天数</h2>
                </span>
            </div>
        </div>
        )
    }
}
 
export default SelfStudy;