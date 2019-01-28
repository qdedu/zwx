import React from "react"
import 'whatwg-fetch'

const htmlUrl = 'https://final.tfedu.net/nor/2008932584628/da6184007bbcb37b1319118b6e7ba84e/QuestionLibrary/CZ0401016872/CZ0401016872_QueQ/*multifile*/CZ0401016872_QueQ.html?charset=utf-8'
export default class AjaxHtml extends React.Component {
	state = {
		html: ''
	}

    componentWillReceiveProps(nextProps){
		 if(this.props.htmlUrl!=nextProps.htmlUrl)
             this.getHtmlUrl(nextProps)
    }

	componentDidMount() {
    	this.getHtmlUrl(this.props)
	}

	getHtmlUrl=(nextProps)=>{
        if(!nextProps.htmlUrl) return
        fetch(nextProps.htmlUrl).then(async data => {
            data = await data.text()
            this.setState(()=>{
                return {
                    html: data,
                }
            })
        })
	}


	render() {
		return (
			<span dangerouslySetInnerHTML={window.filter.Editor.doRichHtml(this.state.html)}></span>
		)
	}
}
