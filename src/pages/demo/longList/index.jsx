import React, { Component } from 'react'
import { List } from "react-virtualized"

const listHeight = 500
const rowHeight = 48
const rowWidth = 800

function genList() {
    let arr = []
    for(let i=0;i<1000000;i++){
        arr.push({
            image: 'static/img/notify-icon.png',
            name: `平平--${i}`,
            text: `we are family--${i}`
        })
    } 
    return arr
}

const list = genList()

class LongList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    renderRow = ({ index, key, style }) => {
        return (
            <div key={key} style={style} className="row">
                <div className="image">
                    <img src={list[index] && list[index].image} alt="默认文字" />
                </div>
                <div className="content">
                    <div>{list[index] && list[index].name}</div>
                    <div>{list[index] && list[index].text}</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="list">
                <List
                    width={rowWidth}
                    height={listHeight}
                    rowHeight={rowHeight}
                    rowRenderer={this.renderRow}
                    rowCount={1000000} />
            </div>
        )
    }
}

export default LongList