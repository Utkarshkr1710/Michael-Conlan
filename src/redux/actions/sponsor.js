import axios from "axios";
import { GET_SPONSOR } from "./types";
import { SPONSOR_API } from '../api'
export function getSponsor() {

  const request = axios
    .get(`${SPONSOR_API}`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_SPONSOR,
        payload: request
    }
}
