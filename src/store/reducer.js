const initialState = {
  counter: 6,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };

    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: Date(), value: state.counter }) //we dont use push on arrays bse arrays are obj, so we wud still be updating it
      };
    case "DELETE_RESULT":
      /* Approach 1
    const id = 2;
    const newArray = [...state.results]
    newArray.splice(id,1)
    return {
      ...state,
      results: newArray
    }
    */
      // const updatedArray = state.results.filter(
      //   (result, index) => index !== id
      // );
      const updatedArray = state.results.filter(
        result => result.id !== action.resId
      );
      return {
        ...state,
        results: updatedArray
      };
  }

  // if (action.type === "INCREMENT") {
  //   return {
  //     // ...state,
  //     counter: state.counter + 1
  //   };
  // }
  // if (action.type === "DECREMENT") {
  //   return {
  //     counter: state.counter - 1
  //   };
  // }
  // if (action.type === "ADD") {
  //   return {
  //     counter: state.counter + action.value
  //   };
  // }
  // if (action.type === "SUBTRACT") {
  //   return {
  //     counter: state.counter - action.value
  //   };
  // }
  return state;
};

export default reducer;
