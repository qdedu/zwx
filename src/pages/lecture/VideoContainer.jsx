import React, {Component} from "react"
import './less/VideoContainer.less'
import Api from '../../api/api'
import DoApi from "../../utils/axios/DoApi";

class VideoContainer extends Component {

    constructor(props) {
        super(props);
        console.log(props.res, 1111)
        this.state = {
            videoTitle: '',
            videoDesc: '',
            videoUrlPath: ''
        }
    }


    componentWillReceiveProps(nextProps) {
        this.getVideoUrlPath(nextProps.res.videoPath + nextProps.res.videoName + '')
        this.setState({
            videoTitle: nextProps.res.videoTitle,
            videoDesc: nextProps.res.videoDesc
        })
    }

    async getVideoUrlPath(path) {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxWebService";
        let method = "getDecodeUrlWeb";

        var contentJson = {
            "path": path,
            "type": 0
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        this.setState({
            videoUrlPath: result.data.content.result.url,

        })
    }

    render() {
        let {videoTitle, videoDesc, videoUrlPath} = this.state
        return (
            <div id='root'>
                <video id='video' src={videoUrlPath}
                       preload='metadata' controls/>
                <div id='video-info'>
                    <span id='video-title'>{videoTitle}</span>
                    <span id='video-desc'>{videoDesc}</span>
                </div>
            </div>
        )
    }
}

export default VideoContainer;