import bridge from './bridge'

const registerMethods = {
    'release': function(callback) {
        //处理发布
        callback()
    },
    'scanQrCode': function(callback){
        // 调用原生接口扫描二维码
        dsBridge.call('scanQrCode',function(responseData) {
            document.getElementById("show").innerHTML = "scanQrCode = " + responseData
        })
    }
}

