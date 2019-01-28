import React, {Component} from 'react'
import AjaxHtml from 'components/directive/ajax-html'

const isCorrectOption=(props,correctFlag,optionVal) => {
    let correctStyle
    if(props.typeName==="多项选择题" || props.typeName=="不定项选择题" ||  props.typeName=="双选题"){
        let stuAnsw=[]
        if(props.answer){
            stuAnsw=props.answer.split("")
        }
        let arr = stuAnsw.find((item)=>{return item===optionVal})
        correctStyle= {
            'question-option-num1':true,
            'correct-num': correctFlag == 1,
            'student-answer':correctFlag!=1 && (arr?true:false),
        }
    }else{
        correctStyle= {
            'question-option-num': true,
            'correct-num': correctFlag == 1,
            'student-answer':optionVal==props.answer && correctFlag!=1
        }
    }
    return correctStyle;
}
const isStudentAndCorrect=(props,correctFlag,optionVal)=>{
    let stuAnsw=props.answer.split("")
    console.log("propsanse",props.answer)
    let correctAnswArr  =[]
    props.optionList.map((item)=>{
        if(item.correctFlag==1){
            correctAnswArr.push(item.optionVal)
        }
    })
    let correctAnswStr= correctAnswArr.join("")
    console.log("correctAns",correctAnswStr)
    let arr = stuAnsw.find((item)=>{return item==optionVal})
    let style={
        "student-and-correct":correctFlag==1 && (arr?true:false) && !(correctAnswStr==props.answer),
    }
    return style
}

const OptionList = (props) => {
    console.log(props)
    let optionData = props.optionList || []
    return optionData.map((option, index1) => {
        let questionType = props.typeName
        if (questionType == "多项选择题" || questionType=="不定项选择题" || questionType=="双选题") {
            let danxuanShow = {
                'question-option-one':!util.getSearchByName("fromTag"),
                "subjective-option-style":util.getSearchByName("fromTag")=="composeTest"
            }
            return (
                <div className={classnames(danxuanShow)} key={index1}>
                    <span className={classnames(isCorrectOption(props, option.correctFlag, option.optionVal))}>
                         <span className="optionVal">{option.optionVal}</span>
                         <div className={classnames(isStudentAndCorrect(props,option.correctFlag,option.optionVal))}></div>
                    </span>
                    <div><AjaxHtml htmlUrl={option.optionFile && option.optionFile.path} /></div>
                </div>
            )
        } else{
            let danxuanShow = {
                'question-option-one':!util.getSearchByName("fromTag"),
                "subjective-option-style":util.getSearchByName("fromTag")=="composeTest"
            }
            return (
                <div className={classnames(danxuanShow)} key={index1}>
                    <span className={classnames(isCorrectOption(props,option.correctFlag,option.optionVal))}>
                        <span className="optionVal">{option.optionVal}</span>
                    </span>
                    <div><AjaxHtml htmlUrl={option.optionFile && option.optionFile.path} /></div>
                </div>
            )
        }
    })
}
export default OptionList
