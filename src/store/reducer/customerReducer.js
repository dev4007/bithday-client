const initialState = {
  customerList: [],
  customerByID: [],
};

function customerReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case "CUSTOMER_LIST":
      return { ...state, customerList: action.payload };

    case "CUSTOMER_BY_ID":
      return { ...state, customerByID: action.payload };

    default:
      return state;
  }
}
export default customerReducer;
