import React from 'react'
import AjaxHtml from './ajax-html'

const imgStyle = {
	'width': '300px',
}
const routerContainer = {
	textAlign: 'center'
}

class TestAOP extends React.Component {
	componentWillMount() {
		// alert('加载日志 上传成功 ')
	}
	
	render(){
		return (
			''
		)
	}
}

export default class Filter extends React.Component {
 
	constructor(props){
		super(props)
		this.state = {
			htmlUrl: 'http://downcs.tfedu.net/nor/8186edae-7f2b-4dec-a7e9-de5f1617ab69-019_title.html'
		}
	}
	
    render(){
        return (
            <div style={routerContainer}>
                <h2>Directive 指令</h2>
				<hr />
				<div>适用范围：异步内容处理  面向切面的编程</div>
				
				<hr />
				<h2>异步内容</h2>
				<AjaxHtml htmlUrl={this.state.htmlUrl}></AjaxHtml>
	
	
				<hr />
				<h2>面向切面</h2>
				
				<TestAOP>
					<div>加载我的时候自动上传日志</div>
				</TestAOP>
				
				
            </div>
        )
    }
}
