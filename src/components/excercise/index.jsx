import React, {Component} from 'react'
import OptionList from './OptionList'
import QuestionStem from './QuestionStem'
import './index.less'

export default (props) => {
    let subjetiveOptionBox={
        'subjetive-option-box':props.fromTag=="composeTest",
        "option-box":props.fromTag!="composeTest"
    }
    return (
        <div className="question">
            <QuestionStem
                stem={props.stem}
                questionOrder={props.questionOrder}
                fromTag={props.fromTag}
                rootStem={props.rootStem}
            />
            <div className={classnames(subjetiveOptionBox)}>
                <OptionList optionList={props.optionList} typeName={props.typeName} answer={props.answer}/>
            </div>
        </div>
    )
}