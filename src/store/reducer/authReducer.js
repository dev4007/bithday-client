
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  function authReducer(state = initialState, action) {
    const { type } = action;
  
    switch (type) {
      case "LOGIN":
      return {
        isAuthenticated: true,
        user: action.payload,
      };
  
      case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
      };
  
      default:
        return state;
    }
  }
  export default authReducer;
  