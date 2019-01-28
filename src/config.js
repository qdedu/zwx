// 程序相关 配置文件
sessionStorage.FileServer = 'http://downcs.tfedu.net/nor/'
// appId
window.appId = '21212112121'
// 页面地址
window.proServer = location.origin + location.pathname + '#'

window.success = '发布成功'
window.deleteSuccess = '发布成功'
window.urgeSuccess = '发送成功'
window.adjustEndTimeSuccess = '更新成功'

Array.prototype.hasElement = function(key){
    for(let i=0,len=this.length;i<len;i++) {
        if(this[i].getAttribute('key') == key){
            return true
        }
    }
    return false
}

/**
 * 数组去重
 */
Array.prototype.unique = function () {
  const tmp = new Map();
  return this.filter(item => {
    return !tmp.has(item) && tmp.set(item, 1);
  })
}