import { GET_BIO,  } from "../actions/types";

initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BIO:
      return { ...state, data: action.payload };

   

    default:
      return state;
  }
}
