//  注入过滤器
// 日期转换
import DateConvert from './date-convert'

// 富文本内容处理
import Editor from './editor-html'

// 暴露成全局 方便调用
window.filter = {
	DateConvert,
	Editor
}
