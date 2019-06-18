import axios from "axios";
import { GET_UPCOMING_MATCH } from "./types";
import { UPCOMING_MATCH_API } from '../api'
export function getNextMatch() {

  const request = axios
    .get(`${UPCOMING_MATCH_API}`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_UPCOMING_MATCH,
        payload: request
    }
}
