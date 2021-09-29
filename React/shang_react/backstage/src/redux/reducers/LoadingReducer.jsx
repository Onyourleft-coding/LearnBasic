export const LoadingReducer = (
    prevState = {
      isLoading: false,
    },
    action
  ) => {
    // console.log(action);
    let { type,payload } = action;
    switch (type) {
      case "change_loading":
        // 先复制老的状态
        let newState = { ...prevState };
        //直接覆盖
        newState.isLoading = payload
        return newState;
      default:
        return prevState;
    }
  };
  