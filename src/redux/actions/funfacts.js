import axios from "axios";
import { GET_FUNFACTS } from "./types";
import { FUNFACTS_API } from '../api'
export function getFunfacts() {

  const request = axios
    .get(`${FUNFACTS_API}`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_FUNFACTS,
        payload: request
    }
}
