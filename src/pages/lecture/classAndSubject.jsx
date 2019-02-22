import React, {Component} from "react"
import './less/classAndSubject.less'
import Api from '../../api/api'
import DoApi from "../../utils/axios/DoApi";
import TitleBar from '../../components/titlebar/TitleBar'

export default LectureList;

class LectureList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: {},
            resultList: {},
            gradeList:{}
        }
    }

    //选择年级
    onClickLectureItem = async () => {
        util.goForward(`/selectGrade?subjectId=${util.getSearchByName("subjectId")}`, this)
    }

    //选择教材版本
    onClickbanbenItem = async (item) => {
        util.goForward(`/selectSubject?gradeId=${util.getSearchByName("gradeId")?util.getSearchByName("gradeId"):this.state.resultList.data.content.result.gradeId}&gradeName=${util.getSearchByName("gradeName")?util.getSearchByName("gradeName"):this.state.resultList.data.content.result.gradeName}&subjectId=${item.subjectId}`, this)
    }

    componentDidMount() {
        this.getZhlInterfaceGrade()
        this.getgradeList()
    }

    //获取所有年级列表
    getgradeList = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getGradeList";

        var contentJson = {
            "token":util.getToken()
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        console.log(result,5555555);
        this.setState({
                gradeList:result
            }
        )
    }


    /*保存*/
    async tapRightClick(){
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "SaveUserInfo";

        if (!this.state.dataList){return}
        let marr = []
        let dataArr = []
        let gradeList = []

        if (this.state.dataList.data){
            dataArr = this.state.dataList.data.content.result.couInfo
        }
        if (this.state.gradeList.data){
            gradeList=this.state.gradeList.data.content.result
        }

        for (let i = 0; i < dataArr.length; i++) {
            let isSelected = false;
            if (dataArr[i].version && dataArr[i].subjectId == util.getSearchByName("subjectId")){
                for (let j = 0; j < dataArr[i].version.length;j++){

                    for (let m = 0;m < gradeList.length;m++){
                        store.remove(`${gradeList[m].gradeId}`+`${dataArr[i].subjectId}`)

                    }

                    if (dataArr[i].version[j].isSellected){
                        isSelected = true;
                        marr[i] = dataArr[i].version[j].couList[0].coutfCode
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
            "token":util.getToken()
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)
        this.setState({
            }
        )
        window.history.back()
    }

    //返回事件重写
    async tapLeftClick(){

        let dataArr = []
        let gradeList = []

        if (this.state.dataList.data){
            dataArr = this.state.dataList.data.content.result.couInfo
        }
        if (this.state.gradeList.data){
            gradeList=this.state.gradeList.data.content.result
        }

        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i].version){
                for (let j = 0; j < dataArr[i].version.length;j++){

                    for (let m = 0;m < gradeList.length;m++){
                        store.remove(`${gradeList[m].gradeId}`+`${dataArr[i].subjectId}`)

                    }

                }

            }

        }

        window.history.back()

    }


    /*获取用户信息*/
    getZhlInterfaceGrade = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getUserInfoWithZJ";

        var contentJson = {
            "token":util.getToken()
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        this.setState({
                resultList:result
            }
        )
        this.getZhlInterfaceUnifyEntry()
    }

    //获取所有教材版本信息
    getZhlInterfaceUnifyEntry = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "getVersionByGradeIdWithZJ";




        let resData = {}
        let gradeList = []

        if (this.state.dataList.data){
            resData = this.state.resultList.data.content.result
        }
        if (this.state.gradeList.data){
            gradeList=this.state.gradeList.data.content.result
        }

        //存储年级信息到缓存
        let mGid = 7;
        if (store.get("gradeId")) {
            mGid = store.get("gradeId")

        }else {
            store.set("gradeId",resData.gradeId)
            store.set("gradeName",resData.gradeName)
            mGid = resData.gradeId
        }

        var contentJson = {
            "gradeId":mGid,
            "token":util.getToken()
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)

        let dataArr = []
        if (result.data){
            dataArr = result.data.content.result.couInfo
        }

        //从store读取缓存数据
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i].version){
                for (let j = 0; j < dataArr[i].version.length;j++){

                    let cur = `${mGid}`+`${dataArr[i].subjectId}`

                    if (store.get(cur) == dataArr[i].version[j].versionTfCode){
                        dataArr[i].version[j].isSellected = true;
                    }else {
                        dataArr[i].version[j].isSellected = false;
                    }
                }

            }

        }

        //设置默认教材版本
        for (let i = 0; i < dataArr.length; i++) {
            let isSelected = false;
            if (dataArr[i].version){
                for (let j = 0; j < dataArr[i].version.length;j++){

                    if (dataArr[i].version[j].isSellected){
                        isSelected = true;
                        break;
                    }
                }
                if (!isSelected){
                    for (let j = 0; j < dataArr[i].version.length;j++){
                        if (dataArr[i].version[j].versionTfCode.match("RJ")){
                            dataArr[i].version[j].isSellected = true;
                            isSelected = true;
                            break;
                        }
                    }
                }
                if (!isSelected){
                    dataArr[i].version[0].isSellected = true;
                }
            }

        }

        var arrayFilter = dataArr.filter(function(item) {
            return (item.version != null && item.subjectId == util.getSearchByName("subjectId"));
        });
        // localStorage.setItem("subjectbnabenlist"+mGid,{})

        result.data.content.result.couInfo = arrayFilter
        this.setState({
                dataList:result
            }
        )
    }


    render() {
        let {dataList,resultList} = this.state
        console.log(store.get("gradeId111"))

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
                        <span className="subType">{store.get("gradeName")}</span>
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

