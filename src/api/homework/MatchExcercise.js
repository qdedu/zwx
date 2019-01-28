import { url, get, post } from "edu-common"

class MatchExcerciseApi {
    
	@url("/navigation/editions")
	@get
	fetchEditions() {}
	
	@url("/navigation/books")
	@get
	fetchBooks() {}

	@url("/navigation/bookContents")
	@get 
	fetchChapters() {}

	@url("/paper/query")
	@get
	fetchQuestionList() {}

	@url("/question/info")
	@get
	fetchQuestionDetail() { }

	@url("/work/matchingexercises/release")
    @post
	release(){}
	
	@url("/work/matchingexercises/detail-teacher-matchingexercises")
	@post
	getMatchingexerciseDetail() {}

	@url("/work/matchingexercises/student-respond-situation")
	@post
	getStudentRespondSituation() {}

	@url("/work/matchingexercises/list-overall-answer")
	@post
	getListOverallAnswer() {}

	@url("/work/matchingexercises/urge")
	@post
	urge() {}

	@url("/work/matchingexercises/adjustment-endtime")
	@post
	adjustTime() {}

	@url("/work/matchingexercises/detail-student-answer")
	@post
	getStudentAnswerDetail() {}

	@url("/work/matchingexercises/detail-overall-answer")
	@post
	getSingleQuestionDetail() {}	 
	
	@url("/work/matchingexercises/list-student-overall-answer")
	@post
	getAnswerStudentList() {}

	@url("/work/matchingexercises/delete-teacher-matchingexercises")
	@post
	deleteMatchExcercise() {}

	@url("/work/matchingexercises/list-teacher-work")
	@get
	getMatchExcerciseTeacherList() {}

	@url("/work/matchingexercises/list-student-work-task")
	@get
	getMatchExcerciseStudentList() {}

	@url("/work/matchingexercises/list-guardian-assignment")
	@get
	getMatchExcerciseParentList() {}

	@url("/work/matchingexercises/detail-guardian-work")
	@post
	getParentMatchExcerciseDetail() {}

	@url("/exercise/evaluate")
	@get
    getExamResult(){}

    @url("/work/matchingexercises/list-cache")
	@get
	getMatchingCache(){}

	//选题组卷
	@url("/question/type")
	@get
	getQuestionType(){}

	@url("/question/query-page")
	@get
	getQuestionList(){}

	@url("/question/diff-list")
	@get
	getQuestionDiff(){}

	@url("/work/basket/add-batch-specific")
	@post
	addQuesToBasket(){}

	@url("/work/basket/count")
	@get
	getBasketLength(){}

	@url("/work/basket/delete-specify")
	@post
	deleteQuesFromBasket(){}

	@url("/work/basket/list")
	@get
	getBasketList(){}

	@url("/work/basket/clear")
	@post
	clearBasket(){}

	@url("/exercise/userNavigationHistory")
	@post
	setUserNavHistory(){}

	@url("/exercise/userNavigationHistory")
	@get
	getUserNavHistory(){}

	//中高考专题
	@url("/question/system-type")
	@get
	getTopicSpecialType(){}

	@url("/navigation/top-knowledge")
	@get
	getSpecialTopKnowledge(){}

	@url("/navigation/child-knowledge")
	@get
	getSpecialChildKnowledge(){}

	@url("/question/special-topic")
	@get
	getSpecialTopicList(){}

	@url("/question/query-special-topic-question")
	@get
	getSpecialTopicQuestion(){}

	@url("/navigation/user-history-knowledge")
	@post
	setSpecialNavHistory(){}

	@url("/navigation/user-history-knowledge")
	@get
	getSpecialNavHistory(){}

	@url("/question/info")
	@get
	getMidtermQuestionAnswerDetail(){}
}


export default new MatchExcerciseApi()