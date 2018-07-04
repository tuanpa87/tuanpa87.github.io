const initialState = {
  counter: 0,
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
        counter: state.counter - action.val
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: state.counter })
      };
    case "DELETE_RESULT":
      // const id = 2;
      // const newArr = [...this.state.results];
      // newArr.slice(id, 1)
      // return {
      //   ...state,
      //   results: newArr
      // }; 
  }
  return state;
};

export default reducer;
