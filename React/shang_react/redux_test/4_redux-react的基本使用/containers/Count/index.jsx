// 引入Count的UI组件
import CountUI from "../../components/Count";
//引入connect用于链接UI组件与redux
import { connect } from "react-redux";
//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

/*  1.mapStatetoProps函数返回的是一个对象
    2.返回对象中中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapStatetoProps用于传递状态
*/
function mapStatetoProps(state) {
  return { count: state };
}

/*  1.mapDishpatchToProps函数返回的是一个对象
    2.返回对象中中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapDishpatchToProps用于操作状态的方法
*/
function mapDishpatchToProps(dispatch) {
  return {
    jia: (number) =>
      //   console.log(number);
      //通知redux执行加法
      dispatch(createIncrementAction(number)),
    jian: (number) => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) =>
      dispatch(createIncrementAsyncAction(number, time)),
  };
}

// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStatetoProps, mapDishpatchToProps)(CountUI);
