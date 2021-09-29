export const CollApsedReducer = (
  prevState = {
    isCollapsed: false,
  },
  action
) => {
  // console.log(action);
  let { type } = action;
  switch (type) {
    case "change_collapsed":
      // 先复制老的状态
      let newState = { ...prevState };
      //深复制取反
      newState.isCollapsed = !newState.isCollapsed;
      return newState;
    default:
      return prevState;
  }
};
