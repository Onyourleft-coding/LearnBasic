/**
 * 该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from './constant'

// 加法
/* function createIncrementAction(data) {
    return { type: 'increment', data }
} */

// 剑法
/* function createDecrementAction(data) {
    return { type: 'decrement', data }
} */
// 箭头函数写法
// 分别暴露
export const createIncrementAction = data => ({ type: INCREMENT, data }) //返回一个对象要用括号包起来
export const createDecrementAction = data => ({ type: DECREMENT, data })
