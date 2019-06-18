import axios from "axios";
import { GET_SLIDER } from "./types";
import { SLIDER_API } from '../api'
export function getSlider() {

  const request = axios
    .get(`${SLIDER_API}`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_SLIDER,
        payload: request
    }
}
