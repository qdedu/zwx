import React, {Component} from "react"
import './less/selectSubject.less'

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
                    <span id='title'>请选择教材</span>
                    <span id='saveBtn'> </span>
                </div>
                <div className="selectCell">
                    <span className="version">初中数学北师大版</span>
                </div>

                <div className="selectCell">
                    <span className="version">初中数学北师大版</span>
                </div>

                <div className="selectCell">
                    <span className="version">初中数学北师大版</span>
                </div>

                <div className="selectCell">
                    <span className="version">初中数学北师大版</span>
                </div>

            </div>
        )
    }
}

export default LectureList;