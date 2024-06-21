const initialState = {
    artistList: [],
    artistByID: [],
  };
  
  function artistReducer(state = initialState, action) {
    const { type } = action;
  
    switch (type) {
      case "ARTIST_LIST":
        return { ...state, artistList: action.payload };
  
      case "ARTIST_BY_ID":
        return { ...state, artistByID: action.payload };
  
      default:
        return state;
    }
  }
  export default artistReducer;
  