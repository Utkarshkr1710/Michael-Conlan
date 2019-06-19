import axios from "axios";
import { GET_BIO } from "./types";
import { BIO_API } from '../api'
export function getBio() {

  const request = axios
    .get(`${BIO_API}`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_BIO,
        payload: request
    }
}
