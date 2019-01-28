import React, {Component} from 'react'
import './less/NotifyDetail.less'
import RichText from 'components/richtext/RichText'

const confirmState = {
    1: function() {
       return "无需家长检查"
    },
    2: function(stateType,role) {
        if(role==2){
            return "需家长检查"
        }
        if (stateType == 1) {
            return "需家长检查"
        }
        if (stateType == 2) {
            return "需家长检查"
        }
        if (stateType == 3) {
            return "需家长检查"
        }
        if (stateType == 4) {
            return "需家长检查"
        }
        if (stateType == 5) {
            return "家长已检查"
        }
    }
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showStudentList:false,
            teacherTime:""
        }
    }

    onClickSubmitList=(e)=> {
       e.stopPropagation()
        this.setState({
            showStudentList:!this.state.showStudentList
        },()=>{
            // if(this.state.showStudentList==true){
            //     console.log($(".offline-sheet-detail").length)
            //     $(".notify-detail").addClass("stopScroll")
            //     $(".tabPanel").addClass("stopScroll")
            // }
        })

    }

    onCloseSubmitList=()=> {
        this.setState({
            showStudentList: false
        })
    }

    onClickPreviewImg=(position,item)=>{
        let urls=item.join(",")
        let data={
            position,
            urls
        }
        dsBridge.call("picturePreview", data);
    }

    handleBr=(workIntro)=>{
        workIntro = {
            __html: "<pre style='white-space: pre-line;font-size:1.6rem;'>" + workIntro + "</pre>"
        }
        return workIntro
    }


    componentWillReceiveProps(nextProps){
    }

    componentDidMount() {
        let data={
            "tag": "/homework/teacher/list",
            "event": "updateStudentFinish",
            "args": {
            }
        }
        dsBridge.call("sendEvent", data);
    }

    render() {
        let { offlineSheetDetail, files,resStatus,studentResList } = this.props
        let { showStudentList } = this.state
        let teacherTime=util.showDayAndHHmm(offlineSheetDetail.createTime && offlineSheetDetail.createTime ||
            offlineSheetDetail.releaseTime && offlineSheetDetail.releaseTime,"HH:mm")
        const roleId = util.getRoleId()
        let isShare=util.getSearchByName("isShare")
        let imgStyle = {
            width: '100%',
        }
        let classStyle={
            "classStyle":true,
            "hide":roleId==1 || roleId==3 || isShare
        }

        let teacherStyle={
            "teacherStyle":true,
            "time-info":true,
            "hide":roleId==2
        }

        let confirmStyle={
            "time-info":true,
            "hide":isShare
        }
        let confirm = offlineSheetDetail.confirmState
        let stateType = offlineSheetDetail.stateType
        return (
            <div className="notify-detail">
                <div onClick={this.onCloseSubmitList}>
                    <span className="message-title first-title">{offlineSheetDetail.name || ''}</span>
                    <div className="infoBox">
                        <div className="time-info">{teacherTime || ""}</div>
                        <div className={classnames(classStyle)} onClick={(e)=>this.onClickSubmitList(e)}>
                            {offlineSheetDetail.className}(
                            <a className="haveRes">
                                {resStatus && resStatus.targetNumber}
                            </a>/{resStatus && resStatus.totalNumber})
                        </div>
                        <div className={classnames(teacherStyle)}>{offlineSheetDetail.userName && offlineSheetDetail.userName+"老师布置"}</div>
                    </div>
                    <span className="message-info first-content">
                    {offlineSheetDetail.intro && <span dangerouslySetInnerHTML={this.handleBr(offlineSheetDetail.intro)} ></span>}
                        {
                            files.map((item,index)=>
                                <p key={index}>
                                    <img className="upload-picture"
                                         style={imgStyle}
                                         src={item}
                                         onError={(e)=>e.target.src="static/img/2.jpg"} alt=""
                                         onClick={()=>this.onClickPreviewImg(index,files)}
                                    />
                                </p>
                            )
                        }
                </span>
                    <span className={classnames(confirmStyle)}>{confirmState[confirm] && confirmState[confirm](stateType,util.getRoleId())}</span>
                </div>
                <div className={showStudentList?"studentList":"hide"}>
                        <div className="list-head">名单</div>

                        <div className="list-content" onClick={this.onClickSubmitList}>
                        {
                            studentResList && studentResList.map((item,index)=>{
                                let submitStyle={
                                    "itemRes":true,
                                    "submit":item.finished,
                                    "unSubmit":!item.finished
                                }
                                return(
                                <div key={index} className={classnames(submitStyle)}>{item.fullName}</div>
                                )}
                            )
                        }
                        </div>
                </div>
            </div>
        )
    }
}