import React,{Component} from 'react'
import Circle from 'react-circle'
import { withRouter } from 'react-router'
import './index.less'

const progress = [24.5,24,25,26,100,100]
const totalStyle = {
    display: 'flex',
    flexWrap: 'wrap',
}
const circleStyle = {
    width: '20',
    lineWidth: '18',
    completeColor: '#00cc56',
    uncompleteColor: '#fe7658',
    size:60,
    textStyle:{
        font: 'bold 8rem Helvetica, Arial, sans-serif',
    }
}
class ReactCircle extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (item) => e => {
        let questionId  = item.questionId
        util.goForward(`/matching-exercises/answerDetails?questionId=${questionId}&workId=${util.getSearchByName('objectId')}&releaseId=${util.getSearchByName('id')}&objectType=${util.getSearchByName("objectType")}&orderNumber=${item.orderNumber}`,this)
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps.circles',nextProps.circles)
    }

    render() {
        let circles = this.props.circles || []
        return ( 
            <div className="total-style" style={totalStyle}>
                {
                    circles.map((item,index)=>{
                        let color
                        item == 100 ? color = circleStyle.completeColor: color = circleStyle.uncompleteColor
                        return (
                            <div className="flex-horizon-center" onClick={this.handleClick(item)} key={index}>
                                <Circle
                                    lineWidth={circleStyle.lineWidth} 
                                    key={index}
                                    progress={item.correctRate} 
                                    progressColor={color}
                                    size={circleStyle.size}
                                    textStyle={circleStyle.textStyle}
                                />
                                <span className="order-number">第{item.orderQuestionNo}题</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
 
export default withRouter(ReactCircle)