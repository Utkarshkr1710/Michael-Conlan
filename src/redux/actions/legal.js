import axios from "axios";
import { GET_LEGAL } from "./types";
import { LEGAL_API } from '../api'
export function getLegal() {

  const request = axios
    .get(`${LEGAL_API}`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_LEGAL,
        payload: request
    }
}
