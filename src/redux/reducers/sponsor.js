import { GET_SPONSOR,  } from "../actions/types";

initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SPONSOR:
      return { ...state, data: action.payload };

   

    default:
      return state;
  }
}
