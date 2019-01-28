import asyncComponent from '../components/async/async'
const RouteConfig = asyncComponent(() => import('../pages/demo/01.jsx'))
const Cell  = asyncComponent(() => import('../components/cell/cell'))
const Example = asyncComponent(() => import("../pages/example"))
const LazyImage = asyncComponent(() => import("../components/lazy/lazyimage.jsx"))
const FilterExample = asyncComponent(() => import("../components/filter/filter"))
const DirectiveExample = asyncComponent(() => import("../components/directive/directive"))
const ApiProxy = asyncComponent(() => import("../pages/demo/02"))
const RouterExample = asyncComponent(() => import("../pages/demo/router/01"))
const PullToRefresh = asyncComponent(() => import("../components/pulltorefresh/PullToRefresh"))
const IndexMobx = asyncComponent(() => import("pages/demo/mobx/total"))
const SliderExa = asyncComponent(() => import("pages/demo/03"))
const RefreshLoading = asyncComponent(() => import("pages/demo/04"))
const ReactCircle = asyncComponent(() => import("pages/demo/circle"))
const RefreshLoading2 = asyncComponent(() => import("pages/demo/refreshLoading"))
const Sketon = asyncComponent(() => import("pages/demo/sketon"))
const LongList = asyncComponent(() => import("pages/demo/longList"))

export default [
    {
        path: '/cell',
        component: Cell,
    },
    {
        path: '/route-config',
        component: RouteConfig,
    },
    {
        path: '/lazyImage',
        component: LazyImage
    },
    {
        path: '/filter',
        component: FilterExample
    },
    {
        path: '/example',
        component: Example
    },
    {
        path: '/directive',
        component: DirectiveExample
    },
    {
        path: '/api-proxy',
        component: ApiProxy
    },
    {
        path: '/router-example',
        component: RouterExample
    },
    {
        path: '/pull-to-refresh',
        component: PullToRefresh
    }, 
    {
        path: '/index-mobx',
        component: IndexMobx
    },
    {
        path: '/slider-exa',
        component: SliderExa
    },
    {
        path: '/refresh-loading',
        component: RefreshLoading
    },
    {
        path: '/react-circle',
        component: ReactCircle
    },
    {
        path: '/refresh-loading2',
        component: RefreshLoading2
    },
    {
        path: '/sketon',
        component: Sketon
    },
    {
        path: '/long-list',
        component: LongList
    }
]