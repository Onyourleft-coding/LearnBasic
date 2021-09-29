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

// 使用connect()()创建并暴露一个Count容器组件
export default connect(
  (state) => ({ count: state }),

  //   mapDispatchToProps的一般写法
  /* (dispatch) => ({
    jia: (number) => dispatch(createIncrementAction(number)),
    jian: (number) => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) =>
      dispatch(createIncrementAsyncAction(number, time)),
  }) */

  //   mapDispatchToProps的简写
//   mapDispatchToProps可以传两种值，一是函数，二是对象
  {
      jia:createIncrementAction,
      jian:createDecrementAction,
      jiaAsync:createIncrementAsyncAction,
  }

)(CountUI);
