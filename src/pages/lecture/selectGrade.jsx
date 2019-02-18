import React, {Component} from "react"
import './less/selectGrade.less'

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
                    <span id='palaceBtn'> </span>
                    <span id='title'>请选择年级</span>
                    <span id='saveBtn'> </span>
                </div>
                <div className="selectCell">
                    <span className="version">七年级</span>
                </div>

                <div className="selectCell">
                    <span className="version">七年级</span>
                </div>

                <div className="selectCell">
                    <span className="version">七年级</span>
                </div>

                <div className="selectCell">
                    <span className="version">七年级</span>
                </div>

            </div>
        )
    }
}

export default LectureList;