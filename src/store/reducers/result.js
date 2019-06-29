import * as actionTypes from "../actions/actions";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: Date(), value: action.value }) //we dont use push on arrays bse arrays are obj, so we wud still be updating it
      };
    //value nolonger in state.counter but passed as a props on the action from another reducer
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.resId
      );
      return {
        ...state,
        results: updatedArray
      };
  }

  return state;
};

export default reducer;
