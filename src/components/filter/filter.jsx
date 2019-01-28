import React from 'react';

const imgStyle = {
	'width': '300px',
}
const routerContainer = {
	textAlign: 'center'
}


class FilterDate extends React.Component {
	
	render(){
		return (
			<span>{window.filter.DateConvert.toDay(this.props.dateToFormat)}</span>
		)
	}
}

export default class Filter extends React.Component {
 
	state = {
		date: 1521016021000,
		richHtml: '<p>html片段<br><img src="bc51a464-c981-42c7-8993-b25b4d23dbe8-024.jpg"  type="uploadImg" path="discuss/2018/50836460105/2" name="1.jpg" style="max-width:800px"></p>'
	}
	
    render(){
        return (
            <div style={routerContainer}>
                <h2>filter过滤器</h2>
				<hr />
				<div>适用范围：静态内容处理， 编辑器富文本内容处理</div>
				
				<hr />
				<h2>组件方法</h2>
				<FilterDate dateToFormat={this.state.date}></FilterDate>
	
				<hr />
				<h2>全局方法（建议使用）</h2>
				
				<span>{window.filter.DateConvert.toDay(this.state.date)}</span>
				
				<span dangerouslySetInnerHTML={window.filter.Editor.doRichHtml(this.state.richHtml)}></span>
	
				
            </div>
        )
    }
}
