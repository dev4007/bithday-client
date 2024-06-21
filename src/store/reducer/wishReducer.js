const initialState = {
  list: [],
  listByID: [],

};

function WishReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case "SCHEDULE_WISH":
      return { ...state, list: action.payload };

    case "SCHEDULE_WISH_BY_ID":
      return { ...state, listByID: action.payload };

    default:
      return state;
  }
}
export default WishReducer;
