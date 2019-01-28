/**
 * 保持代码整洁优雅，享受编程
 * @author lgzhang08@gmail.com
 * 编辑器相关内容处理
 */
import EditorFile from '../editor/editor-file'

class Editor {
	// 富文本内容处理，加上全路径
	doRichHtml(html) {
		return {__html: EditorFile.addServerToPath(html)}
	}
}
export default new Editor()