import axios from 'axios'

const JSONbig = require('json-bigint-string');

axios.defaults.headers.get['Content-Type']='application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';


axios.interceptors.request.use(function(config) {
  //在发送请求之前做某事
  return config;
}, function(error) {
  return Promise.reject(error);
});

axios.defaults.transformResponse =  [function (data) {
  // Do whatever you want to transform the data
  return JSONbig.parse(data);
}]


axios.interceptors.response.use(function(response) {
  // Do something with response data
  // 非接口类 请求，直接返回
  if(!response.data.code) return response;
  
  let data = response.data.data;
  let code = response.data.code;
  
  if(code == 'OK' || code == 200) {
    return data;
  } else {
    console.log('axios加载失败:', response);
  }
  return response;
}, function(error) {
  // Do something with response error
  return Promise.reject(error);
});

window.$axios = axios
export default  axios
