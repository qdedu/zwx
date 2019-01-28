import React, {Component} from 'react'
import propTypes from 'prop-types'
import './less/ClassPanel.less'
import HomeWorkApi from 'api/homework/HomeWork'

class ClassPanel extends Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {
            classList: [],
            a: 1,
        }
    }

    async componentDidMount() {
        await this.getClassList()
    }

    static getDerivedStateFromProps(nextProps){

    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return true
    // }

    async getClassList(){
        let classList = await HomeWorkApi.getClassList()
        this.setState({
            classList
        })
    }

    //selectReceiver = (param,e) => {

      //  e.preventDefault();
        //console.log(param)
       
    //}

    saveClassList(){
        let that = this
        let selectClassNames = this.state.classList.filter((item) => item.selected).map((item)=> item && item.id)

        let isSelectClass = util.checkRules({classId: selectClassNames}, {
            classId: {
                required: true,
                name: '班级'
            }
        })
        if (!isSelectClass){
            return false
        }
        this.props.closeModel(false)
        this.props.changeClassIds(selectClassNames)
    }

    toggle = (data) => {
        if(!Object.prototype.hasOwnProperty.call(data,'selected')){
            Object.assign(data,{selected:true})
        }else{
            data.selected = !data.selected
        }
        return data
    }

    getClassIndex = (data) => {
        let classList = this.state.classList
        for(let i=0,length=classList.length;i<length;i++){
            let item = classList[i]
            if(item.id == data.id){
                return i
            }
        }
    }

    selectClass = (data) => {
        
        let index = this.getClassIndex(data)
        let changeData = this.toggle(data)
        console.log(changeData)
        let that = this

        this.setState((prevSate)=>{
            prevSate['classList'][index] = changeData
            return {
                classList: prevSate['classList']
            }
        })
    }

    getClassStyle = (data) => {
        if(!!data.selected){
            return {
                'selected': !!data.selected
            }
        }
    }

    closeModel = () => {
        
    }

    /*计算属性*/

    render() {
        const classList = this.state.classList
        const { closeModel } = this.props
        let that = this
        return (
            <div className={classnames(this.props.pro)}>
                <div className="model" onClick={closeModel}></div>
                <div className="class-list">
                    <div className="receiver">布置范围 :</div>
                    <div class="class-content">
                        {
                            classList.map((classItem,index)=>{
                                let classItemStyle = that.getClassStyle(classItem)
                                return (
                                    <span key={index} className={'class-list-item '+classnames(classItemStyle)} onClick={()=>this.selectClass(classItem)}>
                                    {classItem && classItem.name}
                                </span>
                                )
                            })
                        }
                    </div>
                    <div className="save-button" onClick={()=>this.saveClassList()}>确定</div>
                    {/* <button onClick={this.saveClassList}>确定</button> */}
                    {this.props.content}
                 </div>
            </div>
           
        )
    }
}
export default ClassPanel