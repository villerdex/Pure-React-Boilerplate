// action types

// reducer with initial state
const initialState = {
  signup: {
    data: null,
    loading: null,
    failed: null,
    success: null
  }
};

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "YOUR_ACTION":
      return {...state,
          signup: { data: action.payload,
          loading: false, failed: false, success: true}};
    default:
      return state
  }
}

