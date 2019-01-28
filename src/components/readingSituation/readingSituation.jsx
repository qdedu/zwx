import React, {Component} from 'react'
import UserInfo from 'components/user/user'
import './less/readingSituation.less'

const fetchReadingList = (data=[]) => {
    return data.filter((item)=>item.stateType == 3 || item.stateType == 5)
}

const fetchUnReadingList = (data=[]) => {
    return data.filter((item)=>item.stateType == 2 || item.stateType == 4 || item.stateType == 1)
}

const getReadTitle = (data) => {
    if(data.confirmState == 1){
        return '已读'
    }else{
        return '已检查'
    }
}

const getUnreadTitle = (data) => {
    if (data.confirmState == 1) {
        return '未读'
    } else {
        return '未检查'
    }
}
let readStudent,unreadStudent
const ReadingList = (props) => {
    readStudent = fetchReadingList(props.releaseTaskDtoList)
    let showStudent=[]
    if(readStudent.length>4){
        showStudent=readStudent.slice(0,4)
        readStudent.push({
            studentAvatar:"static/img/homework/readMore.png",
            studentName:"more"
        })
    }
    return (
        <div className="pack-up">
            <div className="readStatus">
                <div className="readIcon"></div>
                <div className="status-content">{getReadTitle(props)}<span className="count">{readStudent.length}</span></div>
            </div>
            {readStudent.length>4?
                <div className="content">
                    {
                        showStudent && showStudent.map((item) =>
                            <div className="user-item more-user-item" key={item.id}>
                                <UserInfo
                                    userImg={item.studentAvatar}
                                    trueName={item.studentName}
                                />
                            </div>
                        )
                    }
                    <img className="showMore" src="static/img/homework/more.png"/>
                </div>
                :
                <div className="less-content">
                {
                    readStudent && readStudent.map((item) =>
                        <div className="user-item" key={item.id}>
                            <UserInfo
                                userImg={item.studentAvatar}
                                trueName={item.studentName}
                            />
                        </div>
                 )}
                </div>
            }
            <img className={readStudent.length>4?"showMore":"hide"}
                 src="static/img/homework/more.png"
                 onClick={()=>props.onClickLoadMore(readStudent,unreadStudent,"read",getReadTitle(props),getUnreadTitle(props))}
            />
        </div>
    )
}

const UnReadingList = (props) => {
    unreadStudent = fetchUnReadingList(props.releaseTaskDtoList)
    let showStudent = []
    if(unreadStudent.length>4){
        showStudent=unreadStudent.slice(0,4)
        showStudent.push({
            studentAvatar:"static/img/homework/unread.png",
            studentName:"more"
        })
    }
    return (
        <div className="pack-up">
            <div className="readStatus">
                <div className="icon"></div>
                <div className="status-content">{getUnreadTitle(props)}<span className="count">{unreadStudent.length}</span></div>
            </div>
            {unreadStudent.length>4?
                <div className="content">
                 {
                    showStudent && showStudent.map((item,index) =>
                        <div className="user-item more-user-item" key={index}>
                            <UserInfo
                                userImg={item.studentAvatar}
                                trueName={item.studentName}
                            />
                        </div>
                    )
                }
                </div>
                :
                <div className="less-content">
                    {
                        unreadStudent && unreadStudent.map((item,index) =>
                            <div className="user-item" key={item.index}>
                                <UserInfo
                                    userImg={item.studentAvatar}
                                    trueName={item.studentName}
                                />
                            </div>
                        )}
                </div>
            }
            <img
                className={unreadStudent.length>4?"showMore":"hide"}
                src="static/img/homework/unreadmore.png"
                onClick={()=>props.onClickLoadMore(readStudent,unreadStudent,"unread",getReadTitle(props),getUnreadTitle(props))}
            />
        </div>
    )
}



let roles = util.getRoles()

let style = {
    'read-list': true,
    'hide': roles.isStudent || roles.isParent
}

class ReadingSituation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillReceiveProps(){
        
    }

    componentDidMount() {
        
    }

    onClickLoadMore=(readStudent,unreadStudent,flag)=>{
        store.set("readStatusList",readStudent)
        store.set("unreadStatusList",unreadStudent)
        util.goForward(`/homework/teacher/readStatus?flag=${flag}&confirmState=${this.props.confirmState}`,this)
    }

    render() {
        const confirmState = this.props.confirmState
        const releaseTaskDtoList = this.props.readSituation ||  []
        return (
            <div  className={classnames(style)}>
                <ReadingList
                    confirmState={confirmState}
                    releaseTaskDtoList={releaseTaskDtoList}
                    onClickLoadMore={this.onClickLoadMore}
                />
                <UnReadingList
                    confirmState={confirmState}
                    releaseTaskDtoList={releaseTaskDtoList}
                    onClickLoadMore={this.onClickLoadMore}
                />
            </div>
        )
    }
}
export default ReadingSituation