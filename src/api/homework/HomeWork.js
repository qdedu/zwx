import { url, get, post } from "edu-common"

class HomeWorkApi {

	@url("/work/assignmentsheet/release")
	@post
    releaseOfflineSheet() {}

    @url("/wisdom/user/getUserClass")
    @get
    getClassList(){}

	@url("/wisdom/usersubject/list")
	@get
    getSubjectList(){}

	@url("/wisdom/usersubject/list4subject")
	@get
	getUserSubjects(){}

	@url("/work/matchingexercises/list-teacher-work")
	@get
    getHomeWorkList(){}

    @url("/work/assignmentsheet/list-guardian-assignment")
    @get
    getTaskList() {}

    @url("/work/composite/detail-teacher-work")
    @post
    getWorkDetail(){}

	@url("/work/composite/detai-student-work-task")
    @post
    getTaskDetail(){}

    @url("/work/composite/detai-guardian-assignment")
    @post
    getGuardianAssignment(){}

    @url("/work/assignmentsheet/update-task-state")
    @post
    changeReadingState(){}

    @url("/work/composite/list-teacher-student-work")
    @post
    getReadingSituation(){}

    @url("/work/assignmentsheet/delete-assignment-sheet")
    @post
    deleteAssignmentSheet(){}

    @url("/work/composite/list-path-work")
    @post
    getFiles(){}
    //作业单优化
    @url("/work/assignmentsheet/class-state-static")
    @post
    getRespondenceStatus(){}

    @url("/work/assignmentsheet/student-state-list")
    @post
    getStudentResList(){}

    @url("/work/assignmentsheet/list-answer")
    @post
    getStudentHomeworkList(){}

    @url("/work/assignmentsheet/query-answer")
    @post
    getStudentAnswer(){}

    @url("/work/assignmentsheet/submit-answer")
    @post
    addStudentAnswer(){}

    @url("/work/assignmentsheet/del-answer")
    @post
    deleteStudentAnswer(){}

    @url("/work/assignmentsheet/like")
    @post
    praiseHomework(){}

    @url("/work/assignmentsheet/unlike")
    @post
    cancelPraiseHomework(){}

    @url("/work/assignmentsheet/view-answer")
    @post
    sendHaveCheckInfo(){}

    @url("/work/anon/assignmentsheet/detai-student-work-task")
    @post
    getShareOfflineContent(){}

    @url("/work/anon/assignmentsheet/query-answer")
    @post
    getShareStudentAnswer(){}

    @url("/work/anon/assignmentsheet/list-path-work")
    @post
    getShareOfflineFile(){}

    //拆题
    @url("/work/worldsplit/marking/complete-list")
    @post
    getCorrectStudentList(){}

    @url("/work/worldsplit/question/list")
    @post
    getComposeTestDetail(){}

    @url("/work/worldsplit/statistic/detail-overall-answer")
    @post
    getComposeTestItemQuesDetail(){}

    @url("/work/worldsplit/release")
    @post
    reAssignHomework(){}

    @url("/work/worldsplit/marking/question-complete-list")
    @post
    getFinishedComposeStudentList(){}

    @url("/work/worldsplit/marking/question-answer-detail")
    @post
    getComposeItemStudentDetail(){}

    @url("/work/worldsplit/marking/correct")
    @post
    saveCorrect(){}

    @url("/work/composite/get-released-class")
    @get
    checkHaveAssigned(){}

    @url("/work/worldsplit/statistic/subjective-question-answer-statistic-detail")
    @post
    getSubjectAnswerList(){}

    //备授课
    @url("/instruct/add")
    @post
    addLesson(){}

    @url("/instruct/delete")
    @post
    deleteLesson(){}

    @url("/instruct/judge-instruct")
    @get
    checkIsOnLesson(){}

    @url("/work/worldsplit/release/1.1")
    @post
    reAssginPickQues(){}

    //微课作业
    @url("/work/micro-lecture/work-static-simple")
    @post
    getStudentWorkState(){}

    @url("/work/micro-lecture/work-static")
    @post
    getRescStudyState(){}

    @url('/work/micro-lecture/student-ranking')
    @post
    getStudentRanking(){}

    @url('/work/micro-lecture/specify-resource-static')
    @post
    getSpecifyResourceDetail(){}

    @url('/work/micro-lecture/one')
    @get
    getMicroLectureDetail(){}

    @url('/work/micro-lecture/specify-student-static')
    @post
    getSpecifyStudentDetails(){}

    // 获取资源详情
    @url("/resRestAPI/v1.0/resPreviewInfo")
    @get
    getSingleInfo() {}

    // 获取资源播放路径
    @url("/resRestAPI/v1.0/resViewUrl")
    @get
    resViewUrl() {}

    @url("/work/micro-lecture/view-last-log")
    @post
    getVideoLastTime(){}

    @url("/work/micro-lecture/submit-log")
    @post
    updateLearnStatus(){}

    @url('/work/micro-lecture/video-down')
    @post
    getVideoUrl(){}

    @url("/resRestAPI/v1.0/client-view-info")
    @get
    getNotMicroUrl(){}
}

export default new HomeWorkApi()