import React, { Component } from 'react'
import { PullToRefresh } from 'antd-mobile'

function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
        dataArr.push(i);
    }
    return dataArr;
}
let i = 0

class PullToRefresh2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            height: document.documentElement.clientHeight,
        }
    }
    componentDidMount() {
        const hei = this.state.height - 480;
        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }

    onRefresh = ()=>{
        console.log(111)
        this.setState((prevState)=>{
            let chanData = prevState['data'].map((item)=>`item${++i}`)
            return {
              data: chanData
            } 
        })
    }

    render() { 
        return ( 
            <PullToRefresh
                onRefresh={this.onRefresh}
            >
                {this.state.data.map(i => (
                    <div key={i} style={{ textAlign: 'center', padding: 20 }}>
                        {this.state.down ? 'pull down' : 'pull up'} {i}
                    </div>
                ))}
            </PullToRefresh>
        )
    }
}
 
export default PullToRefresh2