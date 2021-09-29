/**
 * 1.该文件是用于创建一个为Person组件服务的reducer，reducer的本质就是一个函数
 * 2.reducer函数会接到两个参数，分别为：之前的状态（preState），动作对象(action)
 */
import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'tom', age: 18 }] //初始化人的列表

export default function personReducer(preState = initState, action) {
    // console.log('adsadadas');
    const { type, data } = action
    switch (type) {
        case ADD_PERSON: //若是添加一个人
            return [data, ...preState] //展开运算符
        default:
            return preState;
    }
}