import axios from "axios";
import { GET_LATEST_VIDEO, GET_GYM_VIDEO, GET_MATCH_VIDEO, GET_TRAINING_VIDEO, GET_EXCLUSIVE_VIDEO } from "./types";
import { VIDEO_API
 } from '../api'
export function getLatestVideo() {

  const request = axios
    .get(`${VIDEO_API}`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_LATEST_VIDEO,
        payload: request
    }
}

export function getTrainingVideo() {

  const request = axios
    .get(`${VIDEO_API}?category=training`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_TRAINING_VIDEO,
        payload: request
    }
}
export function getMatchVideo() {

  const request = axios
    .get(`${VIDEO_API}?category=match`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_MATCH_VIDEO,
        payload: request
    }
}

export function getGymVideo() {

  const request = axios
    .get(`${VIDEO_API}?category=gym`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_GYM_VIDEO,
        payload: request
    }
}

export function getExclusiveVideo() {

  const request = axios
    .get(`${VIDEO_API}?category=exclusive`)
    .then(res => res.data)
    .catch(err => console.log(err));

    return {
        type: GET_EXCLUSIVE_VIDEO,
        payload: request
    }
}