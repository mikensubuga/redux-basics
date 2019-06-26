const initialState = {
  counter: 6
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        // ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1
      };
    case "ADD":
      return {
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        counter: state.counter - action.value
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
