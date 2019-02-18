import React, {Component} from "react"
import './less/homePageList.less'
import Api from '../../api/api'
import DoApi from "../../utils/axios/DoApi";
import TitleBar from '../../components/titlebar/TitleBar'

class LectureList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: {}
        }
    }

    onClickLectureItem = async (courseId) => {
        util.goForward(`/lectureList`, this)
    }

    componentDidMount() {
        this.getZhlInterfaceUnifyEntry()
    }


    getZhlInterfaceUnifyEntry = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getCurrPage";

        var contentJson = {
            "catalogTfcode":"RJCZ0201",
            "gradeId":7,
            "token":"9F5336D314F887F46834B0C6A0EE4C7064FC8880E17A43508C8A9A8B93B1495A801A35BF2CD1F1B452FDB19EC0FD61DF",
            "currentPage":1,
            "linesPerPage":10000
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        if (!result.data) return false
        for (let i = 0; i < result.data.content.result.list_curr.length; i++) {
            result.data.content.result.list_curr[i].thumbnailPath = await this.getImgUrlPath(result.data.content.result.list_curr[i].thumbnailPath)
        }
        console.log(result);
        this.setState({
                dataList:result
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
        console.log(result.data.content.result.url, 44444)
        return result.data.content.result.url
    }

    render() {
        let {dataList} = this.state

        let myDataList = []
        if (dataList.data){
            myDataList = dataList.data.content.result.list_curr
            console.log(dataList.data.content.result.list_curr,111111);
        }

        var benzhouFilter = myDataList.filter(function(item) {
            return item.isThisWeek == 1;
        });

        var arrayFilter = myDataList.filter(function(item) {
            return item.isThisWeek == 0;
        });
        // console.log(benzhouFilter,333333);
        // console.log(arrayFilter,22222);

        return (
            <div id='root'>

                <TitleBar title='数学'/>

                <div className="jiaocaibanben">
                    <div className="jiaocaiName"><span className="myWordColor">八年级 | 数学人教版</span></div>
                    <div className="jinru"><span className="myWordColor">></span></div>
                </div>

                <div className="home">
                    <div className="class-type-benZhou">
                        <img style={{width:'17.5px',height :'13.5px',padding:'0px 5px 0px 0px'}} src="static/img/benzhoukecheng-icon.png" alt=""/>
                        <span className='wordColor'>本周课程</span>
                    </div>
                    <div className="homeList">
                        {
                            (benzhouFilter||[]).map((item, index) => {
                                return (
                                    <div className="listCell" onClick={()=>this.onClickLectureItem(item.courseId)}>
                                        <div className="cellImg">
                                            <img className="img" style={{width:'100%'}} src={item.thumbnailPath} alt=""/>
                                            <span className="videoNum">{item.videoNum}段视频</span>
                                        </div>
                                        <div className="titleName">{item.courseTitle}</div>
                                        <div className="titleDate">{item.issuedTime}</div>
                                    </div>
                                )
                                }
                            )
                        }
                    </div>



                    <div className="class-type-wangQi">
                        <img style={{width:'16px',height :'16px',padding:'0px 5px 0px 0px'}} src="static/img/wangqikecheng-icon.png" alt=""/>
                        <span className='wordColor'>往期课程</span>
                    </div>
                    <div className="homeList">
                        {
                            (arrayFilter||[]).map((item, index) => {
                                    return (
                                        <div className="listCell" onClick={()=>this.onClickLectureItem(item.courseId)}>
                                            <div className="cellImg">
                                                <img className="img" style={{width:'100%'}} src={item.thumbnailPath} alt=""/>
                                                <span className="videoNum">{item.videoNum}段视频</span>
                                            </div>
                                            <div className="titleName"><span>{item.courseTitle}</span></div>
                                            <div className="titleDate">{item.issuedTime}</div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>

                </div>


            </div>
        )
    }
}

export default LectureList;