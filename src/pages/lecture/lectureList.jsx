import React, {Component} from "react"
import './less/lectureList.less'
import Api from '../../api/api'
import DoApi from "../../utils/axios/DoApi";
import TitleBar from '../../components/titlebar/TitleBar'

class LectureList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: {}
        }
    }

    onClickLectureItem = async () => {
        util.goForward(`/lectureDetail`, this)
    }

    componentDidMount() {
        this.getContentByCurrId()
    }


    getContentByCurrId = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getContentByCurrId";

        var contentJson = {
            "currId": 491,
            "token": "9F5336D314F887F46834B0C6A0EE4C7064FC8880E17A43508C8A9A8B93B1495A801A35BF2CD1F1B452FDB19EC0FD61DF"
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
        console.log(result.data.content.result.url, 1111)
        return result.data.content.result.url
    }



    render() {
        let {result} = this.state
        return (
            <div id='root'>
                <TitleBar title='几何图形课程列表'/>
                {
                    (result.data && result.data.content.result.res || []).map((item, index) => {
                            return (
                                <div key={index} id='item-root' onClick={this.onClickLectureItem}>
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
        )
    }
}

export default LectureList;