import React, {Component} from "react"
import './less/selectSubject.less'
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

    onClickLectureItem = async (myTtem) => {
        // store.clear()
        store.set(util.getSearchByName("gradeId")+util.getSearchByName("subjectId"),myTtem.versionTfCode)
        util.goForward(`/classAndSubject?gradeId=${util.getSearchByName("gradeId")}&gradeName=${util.getSearchByName("gradeName")}&subjectId=${util.getSearchByName("subjectId")}&versionTfCode=${myTtem.versionTfCode}`, this)

    }


    componentDidMount() {
        this.getZhlInterfaceUnifyEntry()
    }


    getZhlInterfaceUnifyEntry = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getVersionByGradeIdWithZJ";

        var contentJson = {
            "gradeId":util.getSearchByName("gradeId"),
            "token":util.getToken()
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
            myDataList = dataList.data.content.result.couInfo
            console.log(dataList.data.content.result.couInfo,111111)
        }
        var benzhouFilter = myDataList.filter(function(item) {
            return item.subjectId == util.getSearchByName("subjectId");
        });
        console.log(benzhouFilter,5555);
        return (
            <div id='root'>
                <TitleBar title='请选择教材'/>

                {
                    (benzhouFilter||[]).map((item, index) => {

                        return(
                            (item.version||[]).map((myTtem, indlex) => {

                                    return (
                                        <div className="selectCell2" onClick={()=>this.onClickLectureItem(myTtem)}>
                                            <span className="version">{myTtem.versionName}</span>
                                        </div>
                                    )
                                }
                            )
                        )

                        }
                    )
                }

            </div>
        )
    }
}

export default LectureList;