import { combineReducers } from 'redux'
import { test } from './test'

// 拆分reducer，避免reducer过大
const TestRedux = combineReducers({
    test
})

export default TestRedux