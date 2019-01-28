// api装饰器

function send(target, name, descriptor, callback) {
	descriptor.value = async function () {
		let args = {};
		for (let key in arguments) {
			Object.assign(args, arguments[key]);
		}
		let result = await callback(args);
		return result;
	};
	return descriptor;
}

/**
 * 发送参数为json对象数组转成字符串
 * @param target
 * @param name
 * @param descriptor
 * @param callback
 * @returns {*}
 */
function sendArray(target, name, descriptor, callback) {
	descriptor.value = async function () {
		let result = await callback(arguments[0]);
		return result;
	};
	return descriptor;
}

// 添加 路径
function url(url) {
	return function (target, name, descriptor) {
		descriptor.url = url;
	}
}


function get(target, name, descriptor) {
	return send(target, name, descriptor, function (args, url) {
		url = window.GateWayServer + descriptor.url;
		return window.$axios.get(url + '?' + window.util.jsonUrlFormat(args));
	});
}


function post(target, name, descriptor) {
	return send(target, name, descriptor, function (args) {
		const url = window.GateWayServer + descriptor.url;
		return window.$axios.post(url + '?' + window.util.jsonUrlFormat({}), window.util.doJson(args));
	});
}

function postArray(target, name, descriptor) {
	return sendArray(target, name, descriptor, function (args) {
		const url = window.GateWayServer + descriptor.url;
		return window.$axios.post(url, args);
	});
}


export {
	get,
	url,
	post,
	postArray
}