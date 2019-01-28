import asyncComponent from '../components/async/async'

const Main = asyncComponent(() => import("../pages/main"));
const Example = asyncComponent(() => import("../pages/example"));
export default [
    {
        path: '/',
        component: Main
    },
    {
        path: '/example',
        component: Example
    },

]

