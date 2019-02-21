import React, {Component} from "react"
import './less/selectGrade.less'
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

    onClickLectureItem = async (item) => {
        store.set("gradeId",item.gradeId)
        store.set("gradeName",item.gradeName)
        window.history.back()
        // util.goForward(`/classAndSubject?gradeId=${item.gradeId}&gradeName=${item.gradeName}&subjectId=${util.getSearchByName("subjectId")}`, this)
    }

    componentDidMount() {
        this.getZhlInterfaceUnifyEntry()
    }



    getZhlInterfaceUnifyEntry = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getGradeList";

        var contentJson = {
            "token":"9F5336D314F887F46834B0C6A0EE4C7064FC8880E17A43508C8A9A8B93B1495A801A35BF2CD1F1B452FDB19EC0FD61DF",
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        console.log(result);
        this.setState({
                dataList:result
            }
        )
    }

    render() {
        let {dataList} = this.state

        let myDataList = []
        if (dataList.data){
            myDataList = dataList.data.content.result
            console.log(dataList.data.content.result,111111)
        }
        var benzhouFilter = myDataList.filter(function(item) {
            return item.termId == 2;
        });

        var arrayFilter = myDataList.filter(function(item) {
            return item.termId == 3;
        });


        return (
            <div id='root'>
                <TitleBar title='请选择年级'/>

                <div className="space"></div>
                <div className="gradeTypeLine">
                    <div className="nameLine"></div>
                    <div className="gradeType"><span>初中</span></div>
                    <div className="nameLine"></div>
                </div>

                {
                    (benzhouFilter||[]).map((item, index) => {
                            return (
                                <div className="selectCell1" onClick={()=>this.onClickLectureItem(item)}>
                                    <span className="version">{item.gradeName}</span>
                                </div>
                            )
                        }
                    )
                }
                <div className="space"></div>
                <div className="gradeTypeLine">
                    <div className="nameLine"></div>
                    <div className="gradeType"><span>高中</span></div>
                    <div className="nameLine"></div>
                </div>
                {
                    (arrayFilter||[]).map((item, index) => {
                            return (
                                <div className="selectCell1" onClick={()=>this.onClickLectureItem(item)}>
                                    <span className="version">{item.gradeName}</span>
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