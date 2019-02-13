/**
 * Created by lgzhang08@gmail.com 20161012
 * api相关的url处理类
 */
class DoApi {

    constructor() {

    }

    /** md5加密
     * str 需要加密的字符串
     * return 加密后的字符串
     */
    getMD5(str) {
        return hex_md5(str);
    }

    /*
     * json转成url格式
     * 中文encode
     */
    jsonUrlFormat(data = {}) {
        let param = function (obj) {
            let query = ''
            let name, value, fullSubName, subName, subValue, innerObj, i
            for (name in obj) {
                value = obj[name]
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i]
                        fullSubName = name + '[]'
                        innerObj = {}
                        innerObj[fullSubName] = subValue
                        query += param(innerObj) + '&'
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName]
                        fullSubName = name + '[' + subName + ']'
                        innerObj = {}
                        innerObj[fullSubName] = subValue
                        query += param(innerObj) + '&'
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&'
                }
            }
            return query.length ? query.substr(0, query.length - 1) : query
        }
        // 加上token
        data.token = Cookies.get("accessToken") || Cookies.get("token") || 'testToken'
        // 增加userId
        if (!data.userId) data.userId = Cookies.get("userId") || getSeachByName("userId") || ''
        // 增加 去缓存时间戳
        data.noCache = new Date().getTime()
        // 资源平台appId增加
        if (data.apiType == 'res') data.appId = window.NewResAppId
        // 递归将json转成url, 增加sign签名 和 去缓存时间戳noCache
        let dataCustom = param(data) + '&sign=' + this.getMd5Key(data)
        return data.toString() === '[object Object]' ? dataCustom : data
    }

    /*
     * md5加密 url
     * 0 {} 传入json
     * return String 加密后的串
     * 本次加密算法：将传入的json 属性按字母排序后，取出其中的值增加[tfeduKey]后md5加密
     */
    getMd5Key(o) {
        var tfeduKey = '[tfedu]';
        var key, a = [];
        var values = '';

        for (key in o) {
            if (o.hasOwnProperty(key)) {
                a.push(key);
            }
        }
        a.sort();
        // 取出 排序好的 其中的值 拼成 待加密字符串
        for (key = 0; key < a.length; key++) {
            // 处理value未定义等
            if (o[a[key]] == undefined) {
                o[a[key]] = '';
            }
            values += o[a[key]] + tfeduKey
        }
        // 最后加上 appKey
        if (o.apiType == 'res') {
            values += window.NewResAppKey
        } else {
            values += window.appKey
        }

        return this.getMD5(values)
    }


    /**
     * 处理post请求，简单encode封装
     * 暂未使用
     */
    doJson(params) {
        return 'paramsJson=' + JSON.stringify(params.paramsJson)
    }

    /**
     * 拼接请求参数
     * @param className
     * @param method
     * @param contentJson
     * @returns {{paramsJson: {method: *, contentJson: *, className: *}}}
     */
    createParamJSON(className, method, contentJson) {
        return {
            'paramsJson': {
                "className": className,
                "method": method,
                "contentJson": contentJson
            }
        }
    }


}

// 导出单例，方便直接使用
export default new DoApi()
