import React, {Component} from "react"
import './less/lectureList.less'

class LectureList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lectureList: [
                {
                    title: "几何图形初步学习"
                },
                {
                    title: "打发第三方的撒发射点"
                },
                {
                    title: "发生大范围发生大范围"
                }
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
                    <span id='title'>几何图形课程列表</span>
                </div>
                {
                    (lectureList || []).map((item, index) => {
                            return (
                                <div key={index} id='item-root' onClick={this.onClickLectureItem}>
                                    <img id='imgs' src='https://avatar.csdn.net/6/0/6/3_xieluoxixi.jpg'/>
                                    <div id='text-container'>
                                        <span id='title-text'>{item.title}</span>
                                        <span id='desc-text'>集合图像的 总奖金二九九二九二</span>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default LectureList;