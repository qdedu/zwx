import React, {Component} from 'react'
import propTypes from 'prop-types'
import { TextareaItem,WhiteSpace,ImagePicker,Button } from 'antd-mobile'
import { createForm } from 'rc-form'
import UploadPicture from './UploadPicture'
import ClassPanel from './ClassPanel'
import HomeWorkApi from 'api/homework/HomeWork'
import './less/assign.less'

let uploadPictures = []

const singlePicture = {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
}

let date = util.showMonthDay(new Date(),"MM月dd日")

// const path = uploadPictures.map((item)=> item.url)

class Assign extends Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        let that = this
        this.state = {
            receiver: '接收人',
            title: '标题',
            isShowClassPanel: false,
            files: uploadPictures,
            classList: [],
            releaseParam: {
                classId: [],
                intro: '',
                termId: util.getTermId(),
                name: date + '作业单',
                subjectId: '',
                confirmState: 1,
                userId: util.getUserId(),
            } 
        }
    }
   
    componentDidMount = () => {
        const { releaseParam } = this.state
        const { publish } = this.props
        dsBridge.register('release',() => {
            let path = uploadPictures && uploadPictures.map((item) => item.url)
            let param = Object.assign(this.state.releaseParam, { path: path })
            publish(param)
        })
        
    }

    componentWillReceiveProps(nextProps){
        console.log('新的props',nextProps)
        this.setState((prevState)=>{
            prevState['releaseParam']['subjectId'] = nextProps['subjectId'] && nextProps['subjectId'].toString()
            prevState['releaseParam']['confirmState'] = nextProps['switchState']
            return {
                releaseParam: prevState['releaseParam'],
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        
        return true
    }

    selectReceiver = async(param) => {
        let classList = await this.props.getClass()
        this.setState({
            isShowClassPanel: true,
            classList:classList 
        })
    }

    /**
     * files值变化回调
     */
    onChange = (files,operationType,index) => {
        //picker会自动删除图片的！！！！！
        console.log(`值变化啦,操作类型:${operationType},删除图片的索引:${index}图片数组`,files)
        uploadPictures=files
        this.setState({
            files
        })
    }

    /**
     * 单击图片事件
     */

    onImageClick = (position,files) => {
        let imgUrl=files.map((item)=>item.url)
        let urls=imgUrl.join(",")
        let data={
            position,
            urls
        }
        dsBridge.call("picturePreview", data);
    }

    /**
     * 自定义选择图片的方法
     */
    onAddImageClick = (e) => {
        e.preventDefault();
      //  console.log('新增图片啦')
        let that = this
        dsBridge.call(
            'selectPictures'
            ,{}
            ,function(data) {
                const picObj = {url:JSON.parse(data)[0].friendly_url}
                let  picArr=[];
                JSON.parse(data).map((item)=>{
                    picArr.push({url:item.friendly_url})
                })
                uploadPictures=uploadPictures.concat(picArr)
                that.setState({
                    files: uploadPictures
                })
            }
        )
    }

    closeModel = (value) => {
        this.setState({
            isShowClassPanel: value
        })
    }

    changeClassIds = (names) => {
        this.setState((prevState)=>{
            prevState['releaseParam']['classId'] = names
            return {
                releaseParam: prevState['releaseParam']
            }
        })
    }

    async getClassList(){
        let classList = await HomeWorkApi.getClassList()
        return classList
    }

    handleReleaseParam(data){
        
    }

    publishOfflineSheet(){
        
        // console.log('tupianurl',param)
        // this.props.publish(param)
    }

    getClassName(id) {
        // let classList = await this.getClassList()
        // console.log('aadddd')
        let classNames = []
        let classList = store.get('classList')
        for(let classId of id){
            let theClass = classList.find((item)=>item.id == classId)
            classNames.push(theClass.name)
        }
        return classNames.join(', ')
    }

    /*计算属性*/

    render() {

        const { receiver, title, files, classList }  = this.state
        const { classId, content, subjectList,name,intro } = this.state.releaseParam
        const onChange = this.onChange
        const onImageClick = this.onImageClick
        const onAddImageClick = this.onAddImageClick
        const {getFieldProps} = this.props.form
        const {publish} = this.props
        let selectedClassNames = this.getClassName(classId)
        const rules = {
            onChange,
            onImageClick,
            onAddImageClick,
            files
        }
        let classes = {
            show: this.state.isShowClassPanel,
            classPanel: true
        }
        // todo 不能setState
        // this.setState((prevState)=>{
        //     prevState['releaseParam']['classId'] = prevState['releaseParam']['classId'].split()
        //     return {
        //         releaseParam: prevState['releaseParam']
        //     }
        // })
        // const releaseParam = this.state.releaseParam
        // releaseParam.classId = releaseParam.classId && releaseParam.classId.split()
        const releaseParam = this.state.releaseParam

        return (
            <div className="assign">
                {/* <i className="iconfont icon_zan" onClick={()=>this.selectReceiver(20)}>&#xe6ea;</i> */}
                <TextareaItem
                    value={selectedClassNames}
                    title={receiver}
                    autoHeight
                    editable={false}
                    onFocus={()=>this.selectReceiver(20)}
                />
                <WhiteSpace />
                <TextareaItem
                    title={title}
                    autoHeight
                    value={name}
                    onChange={(value)=>this.setState(
                        (prev)=>{
                            prev['releaseParam']['name'] = value
                            return {
                                releaseParam: prev['releaseParam']
                            }
                        }
                    )}
                />
                <WhiteSpace />
                <TextareaItem
                    {...getFieldProps('count', {
                        initialValue: '',
                    })}
                    rows={5}
                    count={500}
                    value={intro}
                    onChange={(value)=>this.setState(
                        (prev)=>{
                            prev['releaseParam']['intro'] = value
                            return {
                                releaseParam: prev['releaseParam']
                            }
                        }
                    )}
                />
                <UploadPicture rules = {rules} />
                <ClassPanel 
                    pro={classes} 
                    classList={classList} 
                    closeModel={()=>this.closeModel(false)} 
                    changeClassIds={this.changeClassIds}
                />
                <WhiteSpace />
            </div>
        )
    }
}
export default createForm()(Assign)