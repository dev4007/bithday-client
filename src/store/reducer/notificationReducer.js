const initialState = {
    notificationList: [],
    notificationByID: [],
  };
  
  function notificationReducer(state = initialState, action) {
    const { type } = action;
  
    switch (type) {
      case "NOTIFICATION_LIST":
        return { ...state, notificationList: action.payload };
  
      case "NOTIFICATION_BY_ID":
        return { ...state, notificationByID: action.payload };
  
      default:
        return state;
    }
  }
  export default notificationReducer;
  