import axios from "axios";
import { GET_FAMILY_GALLERY, GET_PROFESIONAL_GALLERY } from "./types";
import { GALLERY_API } from "../api";


export function getFamilyGallery() {
  const request = axios
    .get(`${GALLERY_API}?category=family`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: GET_FAMILY_GALLERY,
    payload: request
  };
}

export function getProfessionalGallery() {

    const request = axios
      .get(`${GALLERY_API}?category=professional`)
      .then(res => res.data)
      .catch(err => console.log(err));
  
      return {
          type: GET_PROFESIONAL_GALLERY,
          payload: request
      }
  }