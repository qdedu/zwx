import React from 'react'
import { observable,autorun, computed, action } from 'mobx'
import {observer, inject, Provider} from 'mobx-react';
import homeWorkApi from 'api/homework/HomeWork'


@inject("store")
@observer

class Mobx extends React.Component{
    constructor (props){
        super(props)
    }

    async getClassList(){
        this.props.store.common.classList = await homeWorkApi.getClassList()
    }

    async getSubjects(){
        let teacherId = util.getUserId()
        this.props.store.common.subjectList = await homeWorkApi.getSubjectList({
            teacherId
        })
    }
  
    async componentDidMount(){
        await this.getClassList()
        await this.getSubjects()
    }

    render(){
        return (
            <div > 
               mobx示例
            </div>
        )
    }
}

export default Mobx