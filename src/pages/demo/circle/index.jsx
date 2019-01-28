import React,{Component} from 'react'
import Circle from 'react-circle'

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
        this.state = { 

        }
    }

    handleClick = (item) => e => {
        console.log(item)
    }

    render() {
        return ( 
            <div className="total-style" style={totalStyle}>
                {
                    progress.map((item,index)=>{
                        let color
                        item == 100 ? color = circleStyle.completeColor: color = circleStyle.uncompleteColor
                        return (
                            <div onClick={this.handleClick(item)}>
                                <Circle
                                    lineWidth={circleStyle.lineWidth} 
                                    key={index}
                                    progress={item} 
                                    progressColor={color}
                                    size={circleStyle.size}
                                    textStyle={circleStyle.textStyle}
                                />    
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}
 
export default ReactCircle