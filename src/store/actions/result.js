import * as actionTypes from "./actionTypes";
export const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    value: result
  };
};

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 3000);
  };
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resId: id
  };
};
