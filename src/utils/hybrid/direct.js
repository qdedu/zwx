import {hybridConfig} from './hybridConfig.js'
import HybridMethod from './method.js'

/**
 * 处理信息类
 * 1. 获取路由信息
 * 2. 初始化导航信息
 * 3. 页面跳转
 */

const isDebug = util.getSearchByName('debug') == 'true' ? true : false
const isIOS = util.getDeviceType().isIOS

const handleUrl = function(url){
    // let reg = new RegExp("(?<=page=|#).*","g")
    let page = util.getSearchByName('page')
    if(!!page){
        let params = url.match(/&.*/)
        if (params && params[0]){
            return `${page}?${params[0].slice(1)}`
        }
        return page
    }else{
        let reg = new RegExp("#.*","g")
        return url.match(reg) && url.match(reg)[0] && url.match(reg)[0].slice(1)
    }
    
}

class Direct {

    constructor() {
        let hashUrl = location.search || location.hash
        this.pageUrl = handleUrl(hashUrl)
        this.pageUrlArr = this.pageUrl.split('/')
    }

    getNavInfo () {
        let module = this.getModule()
        let role = this.getRole()
        let page = this.getPage()
        return hybridConfig[module][role][page]
    }

    getModule(){
        return this.pageUrlArr[1]
    }

    getRole(){
        return this.pageUrlArr[2]
    }

    getPage(){
        return this.pageUrlArr[3]
    }
    
    getProUrl(){
        return location.origin + location.pathname
    }

    getPageUrl(){
        return `${this.pageUrl}`
    }

    go(context){
        let pathUrl = this.getPageUrl()
        //FIXME 需要实现页面不刷新显示
        context.props.history.push(pathUrl)
    }

}

Direct.getInstance = function(){
    let instance = null
    return function () {
        if (!instance) {
            instance = new Direct()
        }
        return instance
    }
}

export default Direct