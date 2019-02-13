import axios from './AxiosInterceptors'
import DoApi from './DoApi'
// api装饰器
function send(target, name, descriptor, callback) {
  descriptor.value =  function () {
    return callback(arguments[0]);
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
    return axios.get(url + '?' + DoApi.jsonUrlFormat(args));
  });
}

function post(target, name, descriptor) {
  return send(target, name, descriptor, function (args) {
    const url = window.GateWayServer + descriptor.url;
    return axios.post(url+ '?' + DoApi.jsonUrlFormat({}), DoApi.doJson(args));
  });
}

export {
  get,
  url,
  post,
}
