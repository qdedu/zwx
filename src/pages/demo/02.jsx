import Api from 'api/api.js'
import React from 'react'

class ApiProxy extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            userName:'',
        }
    }
    async postApi(){
		let json = {
			loginName: 'jiyanshuang',
			password: '000000'
        }
        let userInfo = await Api.postTest(json)
        this.setState({
            userName:userInfo.user.name
        })
	}
    componentDidMount(){
        this.postApi()
    }
    render(){
        return (
            <div>
               当前登录的用户是:{this.state.userName}
            </div>
        )
    }
}

export default ApiProxy