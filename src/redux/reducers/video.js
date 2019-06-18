import {
  GET_LATEST_VIDEO,
  GET_EXCLUSIVE_VIDEO,
  GET_GYM_VIDEO,
  GET_MATCH_VIDEO,
  GET_TRAINING_VIDEO
} from "../actions/types";

initialState = ({
     
})

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_VIDEO:
      return { ...state, latest: action.payload };

    case GET_TRAINING_VIDEO:
      return { ...state, training: action.payload };

    case GET_MATCH_VIDEO:
      return { ...state, match: action.payload };

    case GET_EXCLUSIVE_VIDEO:
      return { ...state, exclusive: action.payload };

    case GET_GYM_VIDEO:
      return { ...state, gym: action.payload };

    default:
      return state;
  }
}
