import React, {Component} from "react"
import './less/classAndSubject.less'

class LectureList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lectureList: [

            ]
        }
    }

    onClickLectureItem = async () => {
        util.goForward(`/lectureDetail`, this)
    }

    render() {
        let {lectureList} = this.state
        return (
            <div id='root'>
                <div id='title-bar'>
                    <span id='palaceBtn'>保存</span>
                    <span id='title'>年级和教材版本选择</span>
                    <span id='saveBtn'>保存</span>
                </div>
                <span className="selectClassOrType">请选择你的年级</span>
                <div className="selectCell">
                    <span className="name">年级</span>
                    <div className="classDetial">
                        <span className="subType">八年级</span>
                        <span className="more"></span>
                    </div>
                </div>

                <span className="selectClassOrType">请选择你的教材版本</span>
                <div className="selectCell">
                    <span className="name">数学</span>
                    <div className="classDetial">
                        <span className="subType">初中数学人教版</span>
                        <span className="more"></span>
                    </div>
                </div>

            </div>
        )
    }
}

export default LectureList;