import { GET_GALLERY,  } from "../actions/types";

initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GALLERY:
      return { ...state, data: action.payload };

   

    default:
      return state;
  }
}
