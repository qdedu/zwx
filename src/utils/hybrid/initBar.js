import React,{Component} from 'react'
import Direct from './direct.js'

function initBar(Com){
    return class extends Component{
        componentWillMount(){
            let navInfo = Direct.getInstance()().getNavInfo()
            dsBridge.call("initWebPage", navInfo)
        }
        render(){
            return (
                <Com />
            )
        }
    }
}
export {
    initBar
}