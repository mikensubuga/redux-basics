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
        results: state.results.concat(state.counter) //warrays are e dont use push bse arrays are obj
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
