import {url, get, post} from "utils/axios/ApiDecorator"

class Api {
    // 测试 get接口
    @url("/exercise/userMonthStatis")
    @get
    getTest() {
    }

    // 获取token
    // 测试 post接口
    @url("/we-base-sso-provider/sso/login")
    @post
    login() {
    }

    // 提交json数组使用postArray装饰
    @url('/exercise/subAnswer')
    @post
    subAnswer() {
    }


    // 获取用户详情
    @url('/wisdom/user/detail')
    @get
    getUserInfo() {
    }

    /**
     * 获取课程下的视频和测试
     *
     * @Title: getContentByCurrId
     */
    @url('/zhlInterfaceUnifyEntry')
    @post
    getContentByCurrId() {
    }

}

export default new Api()