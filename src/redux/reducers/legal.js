import { GET_LEGAL,  } from "../actions/types";

initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LEGAL:
      return { ...state, data: action.payload };

   

    default:
      return state;
  }
}
