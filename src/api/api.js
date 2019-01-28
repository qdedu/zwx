import { url, get, post } from "edu-common"

class Api {
	// 测试 get接口
	@url("/exercise/userMonthStatis")
	@get
    getTest() {}
	
	// 获取token
	// 测试 post接口
	@url("/we-base-sso-provider/sso/login")
	@post
	login() {}

	// 提交json数组使用postArray装饰
	@url('/exercise/subAnswer')
	@post
	subAnswer() { }

	
	// 获取用户详情
	@url('/wisdom/user/detail')
	@get
	getUserInfo() {}
		
}

export default new Api()