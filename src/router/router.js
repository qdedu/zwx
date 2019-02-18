import asyncComponent from '../components/async/async'

const Main = asyncComponent(() => import("../pages/main"));
const Example = asyncComponent(() => import("../pages/example"));
const LectureList = asyncComponent(() => import("../pages/lecture/lectureList"));
const LectureDetail = asyncComponent(() => import("../pages/lecture/lectureDetail"));
const classAndSubject = asyncComponent(() => import("../pages/lecture/classAndSubject"));
const selectSubject = asyncComponent(() => import("../pages/lecture/selectSubject"));
const selectGrade = asyncComponent(() => import("../pages/lecture/selectGrade"));
const homePageList = asyncComponent(() => import("../pages/lecture/homePageList"));
export default [
    {
        path: '/',
        component: Main
    },
    {
        path: '/example',
        component: Example
    },
    {
        path: '/lectureList',
        component: LectureList
    },
    {
        path: '/lectureDetail',
        component: LectureDetail
    },
    {
        path: '/classAndSubject',
        component: classAndSubject
    },
    {
        path: '/selectSubject',
        component: selectSubject
    },
    {
        path: '/selectGrade',
        component: selectGrade
    },
    {
        path: '/homePageList',
        component: homePageList
    },
]

