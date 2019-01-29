import React, {Component} from "react"
import './less/lectureDetail.less'

class LectureDetail extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div id='title-bar'>
                    <span id='title'>几何图形课程列表</span>
                </div>
                <img id='img' src='https://avatar.csdn.net/6/0/6/3_xieluoxixi.jpg'/>
            </div>
        )
    }
}

export default LectureDetail