import axios from "axios";
import { GET_LATEST_VIDEO } from "./types";
import { VID
 } from '../api'
export function getLatestVideo() {

  const request = axios
    .get(`${GET_LATEST_VIDEO}`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_LATEST_VIDEO,
        payload: request
    }
}
