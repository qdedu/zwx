import asyncComponent from '../components/async/async'

const Main = asyncComponent(() => import("../pages/main"));
const Example = asyncComponent(() => import("../pages/example"));
const LectureList = asyncComponent(() => import("../pages/lecture/lectureList"));
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

]

