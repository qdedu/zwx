//注册事件监听，初始化
function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener(
            'WebViewJavascriptBridgeReady'
            , function() {
                callback(WebViewJavascriptBridge)
            },
            false
        );
    }
}

//回调函数，接收java发送来的数据
connectWebViewJavascriptBridge(function(bridge) {
    bridge.init(function(message, responseCallback) {
    });

})

export {
    connectWebViewJavascriptBridge
}