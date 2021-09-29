/**
 * 该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from '../constant'


// 加法
/* function createIncrementAction(data) {
    return { type: 'increment', data }
} */

// 减法
/* function createDecrementAction(data) {
    return { type: 'decrement', data }
} */
// 箭头函数写法
// 分别暴露
// 同步action，就是值action的值为Object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data }) //返回一个对象要用括号包起来
export const createDecrementAction = data => ({ type: DECREMENT, data })
// 异步action，就是指action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            //通知redux修改数据
            // store.dispatch({ type: INCREMENT, data })
            dispatch(createIncrementAction(data))

        }, time)
    }
}
