import React, {Component} from "react"
import './less/lectureDetail.less'
import DoApi from "../../utils/axios/DoApi";
import Api from "../../api/api";
import VideoContainer from "./VideoContainer";
import TitleBar from '../../components/titlebar/TitleBar'

class LectureDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: {},
            videoIndex: 0
        }
    }


    componentDidMount() {
        this.getContentByCurrId()
    }


    getContentByCurrId = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getContentByCurrId";

        var contentJson = {
            "currId": util.getSearchByName("courseId"),
            "token": "9F5336D314F887F46834B0C6A0EE4C7064FC8880E17A43508C8A9A8B93B1495A801A35BF2CD1F1B452FDB19EC0FD61DF"
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        this.setState({
                result
            }
        )
    }

    /**
     * 更新视频列表索引
     * @param index
     */
    onItemClick = (index) => {
        this.setState({
            videoIndex: index
        })
    }


    callBack = () => {

    }
    leftClick = () => {
        console.log('11111111', 111111)
    }

    render() {
        let {result, videoIndex} = this.state
        return (
            <div>
                <TitleBar
                    onLeftClick={this.leftClick}
                    title={decodeURIComponent(util.getSearchByName("courseTitle"))} onRightClick={this.callBack}
                />

                <VideoContainer res={result.data && result.data.content.result.res[videoIndex]}/>
                {
                    (result.data && result.data.content.result.res || []).map((item, index) => {
                        return (
                            <div>
                                <div id='space-line'/>

                                <div id='video-list' key={index} onClick={() => this.onItemClick(index)}>
                                <span
                                    id={videoIndex == index ? 'video-info-select' : 'video-info'}>{item.videoTitle}</span>
                                    <span
                                        id={videoIndex == index ? 'video-info-select' : 'video-info'}>时长 {item.videoDuration} </span>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}

export default LectureDetail