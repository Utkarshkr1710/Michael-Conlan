import { GET_FAMILY_GALLERY, GET_PROFESIONAL_GALLERY } from "../actions/types";

initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FAMILY_GALLERY:
      return { ...state, family: action.payload };

    case GET_PROFESIONAL_GALLERY:
      return { ...state, professional: action.payload };

    default:
      return state;
  }
}
