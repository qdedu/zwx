import Api from 'api/api.js'
import React from 'react'
import Slider from 'components/slider/Slider'

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
        let sliderStyle = {
            'height': '100px',
            'width':'100%'
        }
        return (
           <Slider>
               <div className="slider-content" style={sliderStyle}> 
                   12313st33131
               </div>
           </Slider>
        )
    }
}

export default ApiProxy