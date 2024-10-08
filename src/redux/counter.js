const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREASE = "increase";

// stage

const initialState = {
  count: 0,
};
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const increase = (value) => ({
  type: INCREASE,
  payload: value,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREASE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
}

export default counterReducer;
