import * as actionTypes from "./actionTypes";
export const saveResult = result => {
  //you can put the logic here or the reducer
  //updatedresult = result * 2
  //or you can put it in the reducer before a new state is returned as redux suggests
  return {
    type: actionTypes.STORE_RESULT,
    value: result
  };
};

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log("New Counter", result);
      console.log("Old Counter", oldCounter);

      if (oldCounter === result) {
        console.log("true");
      } else {
        console.log("false");
      }
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resId: id
  };
};
