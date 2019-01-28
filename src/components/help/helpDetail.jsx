import React from 'react';
import './helpDetail.less';

class HelpDetail extends React.Component {
    render(){
        return (
            <div className="helpDetail">
                <div className="help-title">{this.props.title}</div>
                {
                    this.props.list.map((item)=>
                        <div className="box" key={item.id}>
                            <div className="help-question">{item.question}</div>
                            <div className="help-answer">{item.answer}</div>
                            <div className="help-answer">{item.answer2}</div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default HelpDetail
