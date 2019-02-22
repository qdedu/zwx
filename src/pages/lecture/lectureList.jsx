import React, {Component} from "react"
import './less/lectureList.less'
import Api from '../../api/api'
import DoApi from "../../utils/axios/DoApi";
import TitleBar from '../../components/titlebar/TitleBar'

class LectureList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: {},
            isShowDrawer: false
        }
    }

    onClickLectureItem = async (item) => {
        util.goForward(`/lectureDetail?courseId=${item.courseId}&courseTitle=${util.getSearchByName("courseTitle")}`, this)
    }

    componentDidMount() {
        this.getContentByCurrId()
        this.updateCurrState()
    }


    updateCurrState = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "updateCurrState";

        var contentJson = {
            "currId": util.getSearchByName("courseId"),
            "token": util.getToken(),
            "couState": 1
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)
    }


    getContentByCurrId = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getContentByCurrId";

        var contentJson = {
            "currId": util.getSearchByName("courseId"),
            "token": util.getToken()
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)
        if (!result.data) return false
        for (let i = 0; i < result.data.content.result.res.length; i++) {
            result.data.content.result.res[i].questionPath = await this.getImgUrlPath(result.data.content.result.res[i].questionPath)
        }

        this.setState({
                result
            }
        )
    }


    async getImgUrlPath(path) {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getDecodeUrl_img";

        var contentJson = {
            "path": path,
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        return result.data.content.result.url
    }

    isOpenDrawer = () => {
        this.setState({
            isShowDrawer: !this.state.isShowDrawer
        })
    }

    render() {
        let {result} = this.state
        return (
            <div id='root-container'>
                <div id='root'>
                    <TitleBar
                        title={decodeURIComponent(util.getSearchByName("courseTitle"))}
                        rightImgPath='../../../public/static/img/ic_back.png'
                        onRightClick={this.isOpenDrawer}
                    />
                    {
                        (result.data && result.data.content.result.res || []).map((item, index) => {
                                return (
                                    <div key={index} id='item-root' onClick={() => this.onClickLectureItem(item)}>
                                        <div id='img-root'>
                                            <img id='imgs' src={item.questionPath}/>
                                            <span id='text-time'>{item.videoDuration}</span>
                                        </div>
                                        <div id='text-container'>
                                            <span id='title-text'>{item.videoTitle}</span>
                                            <span id='desc-text'>{item.videoDesc}</span>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>

                <div id={this.state.isShowDrawer ? 'show-cover' : 'hidder-cover'}>

                    <div id='cover-root'>
                        <span id='cover-title'>课程简介</span>
                        <span id='cover-content'></span>
                        <span id='cover-title'>教师简介</span>
                        <span id='cover-content'></span>

                    </div>
                </div>

            </div>
        )
    }
}

export default LectureList;