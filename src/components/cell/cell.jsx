import React from 'react'
import './cell.less'
import Slider from '../slider/Slider'

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList:[
                {
                    id: 1,
                    name: '张三',
                    imgUrl:'',
                    parent: '张三妈妈'
                },
                {
                    id: 2,
                    name: '张三',
                    imgUrl:'',
                    parent: '张三妈妈'
                }
            ]
        }
    }
    
    delete(){
       // 调用删除孩子接口
        
    }

    render() {
        return (
            this.state.studentList.map(item => {
                return (
                    <Slider key={item.id} delete={this.delete.bind(this)}>
                        {/*外层类名必须是slider-content*/}
                        <div className="slider-content">
                            <span>孩子图标</span>
                            <span>孩子头像</span>
                            <span>{item.name}</span>
                            <span>{item.parent}</span>
                        </div>
                    </Slider>
                )
            })
        )
    }
}

export default Cell;