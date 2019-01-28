import React from 'react'
import Mobx from './index'
import ParentComp from './index2'
import { observable,autorun, computed, action } from 'mobx'
import {observer, inject, Provider} from 'mobx-react';

class Store2 {
	// 被观察者
    @observable 
    common = {
		subjectList: [],
        classList: [],
        a: 1,
	}
}
let commonStore = new Store2()

class IndexMobx extends React.Component{
    constructor (props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return (
            <Provider store = { commonStore }>
            <div>
                mobx示例
               <Mobx />
               <ParentComp />
            </div>
               
            </Provider>
        )
    }
}

export default IndexMobx