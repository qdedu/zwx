import React, {Component} from "react"
import './less/classAndSubject.less'
import Api from '../../api/api'
import DoApi from "../../utils/axios/DoApi";
import TitleBar from '../../components/titlebar/TitleBar'

class LectureList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: {},
            resultList: {},
            gradeList:{}
        }
    }

    onClickLectureItem = async () => {
        util.goForward(`/selectGrade?subjectId=${util.getSearchByName("subjectId")}`, this)
    }

    onClickbanbenItem = async (item) => {
        util.goForward(`/selectSubject?gradeId=${util.getSearchByName("gradeId")?util.getSearchByName("gradeId"):this.state.resultList.data.content.result.gradeId}&gradeName=${util.getSearchByName("gradeName")?util.getSearchByName("gradeName"):this.state.resultList.data.content.result.gradeName}&subjectId=${item.subjectId}`, this)
    }

    componentDidMount() {
        this.getZhlInterfaceGrade()
        this.getgradeList()
    }

    getgradeList = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getGradeList";

        var contentJson = {
            "token":"9F5336D314F887F46834B0C6A0EE4C7064FC8880E17A43508C8A9A8B93B1495A801A35BF2CD1F1B452FDB19EC0FD61DF",
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        console.log(result,5555555);
        this.setState({
                gradeList:result
            }
        )
    }


    async tapRightClick(){
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "SaveUserInfo";

        if (!this.state.dataList){return}
        let marr = [];
        let mGid = 7;
        // console.log(,3333333)
        console.log(this.state.resultList.data.content.result,3333333)
        if (util.getSearchByName("gradeId")) {
            mGid = util.getSearchByName("gradeId")

        }else {
            mGid = this.state.resultList.data.content.result.gradeId
        }
        store.set("gradeId",mGid)
        if(this.state.dataList.data.content.result.couInfo){
            for (let i = 0; i < this.state.dataList.data.content.result.couInfo.length; i++) {
                let isSelected = false;
                if (this.state.dataList.data.content.result.couInfo[i].version && this.state.dataList.data.content.result.couInfo[i].subjectId == util.getSearchByName("subjectId")){
                    for (let j = 0; j < this.state.dataList.data.content.result.couInfo[i].version.length;j++){

                        for (let m = 0;m < this.state.gradeList.data.content.result.length;m++){
                            store.remove(`${this.state.gradeList.data.content.result[m].gradeId}`+`${this.state.dataList.data.content.result.couInfo[i].subjectId}`)

                        }

                        if (this.state.dataList.data.content.result.couInfo[i].version[j].isSellected){
                            isSelected = true;
                            marr[i] = this.state.dataList.data.content.result.couInfo[i].version[j].couList[0].coutfCode
                        }
                    }

                }

            }
        }
        let restr = `\[`;
        for (let i = 0 ; i < marr.length;i++){
            if (i == 0){
                restr = restr + `\"${marr[i]}\"`
            }else {
                restr = restr + `,\"${marr[i]}\"`
            }
        }
        restr = restr + `\]`


        var contentJson = {
            "catalogTfcode":restr,
            "token":"9F5336D314F887F46834B0C6A0EE4C7064FC8880E17A43508C8A9A8B93B1495A801A35BF2CD1F1B452FDB19EC0FD61DF",
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)

        let result = await Api.getZhlInterfaceUnifyEntry(params)


        console.log(this.state.dataList,'111111')
        this.setState({
            }
        )
        util.goForward(`/homePageList`, this)
    }

    async tapLeftClick(){
        let mGid = 7;

        console.log(this.state.resultList.data.content.result,3333333)
        if (util.getSearchByName("gradeId")) {
            mGid = util.getSearchByName("gradeId")

        }else {
            mGid = this.state.resultList.data.content.result.gradeId
        }
        store.set("gradeId",mGid)
        if(this.state.dataList.data.content.result.couInfo){
            for (let i = 0; i < this.state.dataList.data.content.result.couInfo.length; i++) {
                let isSelected = false;
                if (this.state.dataList.data.content.result.couInfo[i].version){
                    for (let j = 0; j < this.state.dataList.data.content.result.couInfo[i].version.length;j++){

                        for (let m = 0;m < this.state.gradeList.data.content.result.length;m++){
                            store.remove(`${this.state.gradeList.data.content.result[m].gradeId}`+`${this.state.dataList.data.content.result.couInfo[i].subjectId}`)

                        }

                    }

                }

            }
        }

        util.goForward(`/homePageList`, this)
    }



    getZhlInterfaceGrade = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getUserInfoWithZJ";

        var contentJson = {
            "token":"9F5336D314F887F46834B0C6A0EE4C7064FC8880E17A43508C8A9A8B93B1495A801A35BF2CD1F1B452FDB19EC0FD61DF",
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        this.setState({
                resultList:result
            }
        )

        this.getZhlInterfaceUnifyEntry()
    }

    getZhlInterfaceUnifyEntry = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getVersionByGradeIdWithZJ";

        let mGid = 7;
        // console.log(,3333333)
        // console.log(this.state.resultList.data.content.result,3333333)
        if (util.getSearchByName("gradeId")) {
            mGid = util.getSearchByName("gradeId")

        }else {
            mGid = this.state.resultList.data.content.result.gradeId
        }

        var contentJson = {
            "gradeId":mGid,
            "token":"9F5336D314F887F46834B0C6A0EE4C7064FC8880E17A43508C8A9A8B93B1495A801A35BF2CD1F1B452FDB19EC0FD61DF",
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)



        let result = await Api.getZhlInterfaceUnifyEntry(params)

        if(result.data.content.result.couInfo){
            for (let i = 0; i < result.data.content.result.couInfo.length; i++) {
                if (result.data.content.result.couInfo[i].version){
                    for (let j = 0; j < result.data.content.result.couInfo[i].version.length;j++){

                        let cur = `${mGid}`+`${result.data.content.result.couInfo[i].subjectId}`

                        if (store.get(cur) == result.data.content.result.couInfo[i].version[j].versionTfCode){
                            result.data.content.result.couInfo[i].version[j].isSellected = true;
                        }else {
                            result.data.content.result.couInfo[i].version[j].isSellected = false;
                        }
                    }

                }

            }
        }

        if(result.data.content.result.couInfo){
            for (let i = 0; i < result.data.content.result.couInfo.length; i++) {
                let isSelected = false;
                if (result.data.content.result.couInfo[i].version){
                    for (let j = 0; j < result.data.content.result.couInfo[i].version.length;j++){

                        if (result.data.content.result.couInfo[i].version[j].isSellected){
                            isSelected = true;
                            break;
                        }
                    }
                    if (!isSelected){
                        for (let j = 0; j < result.data.content.result.couInfo[i].version.length;j++){
                            if (result.data.content.result.couInfo[i].version[j].versionTfCode.match("RJ")){
                                result.data.content.result.couInfo[i].version[j].isSellected = true;
                                isSelected = true;
                                break;
                            }
                        }
                    }
                    if (!isSelected){
                        result.data.content.result.couInfo[i].version[0].isSellected = true;
                    }
                }

            }
        }



        var arrayFilter = result.data.content.result.couInfo.filter(function(item) {
            return (item.version != null && item.subjectId == util.getSearchByName("subjectId"));
        });
        // localStorage.setItem("subjectbnabenlist"+mGid,{})

        result.data.content.result.couInfo = arrayFilter
        console.log(result.data.content.result,'66666666');

        this.setState({
            dataList:result
            }
        )
    }


    render() {
        let {dataList,resultList} = this.state

        let myDataList = {}
        let resList = {}
        if (resultList.data){
            resList = resultList.data.content.result


        }
        if (dataList.data){
            myDataList = dataList.data.content.result

        }

        var couList = [];
        if (myDataList){
           couList = myDataList.couInfo;

        }
        let isFinded = false
        return (
            <div id='root'>

                <TitleBar title='年级和教材版本选择' isCanBack={true} onLeftClick={this.tapLeftClick.bind(this)} rightText='保存' onRightClick={this.tapRightClick.bind(this)}/>
                <span className="selectClassOrType">请选择你的年级</span>
                <div className="bbselectCell" onClick={()=>this.onClickLectureItem()}>
                    <span className="name">年级</span>
                    <div className="classDetial">
                        <span className="subType">{

                            util.getSearchByName("gradeName")?decodeURIComponent(util.getSearchByName("gradeName")):resList.gradeName
                            //
                        }</span>
                        <span className="more"></span>
                    </div>
                </div>

                <span className="selectClassOrType">请选择你的教材版本</span>

                {
                    (couList||[]).map((item, index) => {
                            return (

                                <div>
                                    <div className="bbselectCell"  onClick={()=>this.onClickbanbenItem(item)}>
                                        <span className="name">{item.subjectName}</span>

                                        {

                                            ((item.version||[]).map((lItem,lIndex)=>{
                                                        if(lItem.isSellected){
                                                            isFinded = true
                                                            return(
                                                                <div className="classDetial">
                                                                    <span className="subType">{lItem.versionName}</span>
                                                                    <span className="more"></span>
                                                                </div>

                                                            )
                                                        }
                                                    }
                                                )
                                            )


                                        }


                                    </div>
                                    <div className="BBlineView"></div>

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