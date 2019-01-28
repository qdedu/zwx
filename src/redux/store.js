import { createStore, applyMiddleware } from 'redux';
import TestRedux  from './reducers'
import thunk from 'redux-thunk'

// 引入中间件，进行异步操作
const middleware = [ thunk ];
const store = createStore(
    TestRedux,
    applyMiddleware(...middleware)
);
export default store