import React, {Component} from 'react'
import AjaxHtml from 'components/directive/ajax-html'
const QuestionStem = (props) => {
    return (
        <div className="ti-gan">
            {props.fromTag!="composeTest" && !props.rootStem && <span className="present-num">{props.questionOrder}.</span>}
            <span className="question-stem">
               <AjaxHtml htmlUrl={props.rootStem && props.rootStem.path} />
               {props.rootStem && <span className="present-num">{props.questionOrder}.</span>}
               <AjaxHtml htmlUrl={props.stem && props.stem.path} />
            </span>
        </div>
    )
}
export default QuestionStem
