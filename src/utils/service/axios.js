import axios from 'axios'
const JSONbig = require('json-bigint');
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
	let accessToken = store.get('userInfo') && store.get('userInfo').token || 'd8f6b4ba576e4465aa03e7e7aad54190'
	config.url += `&accessToken=${accessToken}`
	return config;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
})

axios.defaults.transformResponse = [function (data) {
	// Do whatever you want to transform the data
	return JSONbig.parse(data);
}]

axios.interceptors.response.use(function (response) {
	// Do something with response data
	//  console.log("response:", response)
	// 非接口类 请求，直接返回
	if (!response.data.code) return response;

	let data = response.data.data;
	let code = response.data.code;

	if (code == 'OK' || code == 200) {
		return data;
	} else {
		console.log('axios 加载失败');
	}
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});

// window.$axios = axios