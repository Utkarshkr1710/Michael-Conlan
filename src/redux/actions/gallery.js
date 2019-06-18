import axios from "axios";
import { GET_GALLERY, } from "./types";
import { GALLERY_API } from "../api";


export function getGallery() {
  const request = axios
    .get(`${GALLERY_API}?category=family`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return {
    type: GET_GALLERY,
    payload: request
  };
}

// export function getProfessionalGallery() {

//     const request = axios
//       .get(`${GALLERY_API}?category=professional`)
//       .then(res => res.data)
//       .catch(err => console.log(err));
  
//       return {
//           type: GET_PROFESIONAL_GALLERY,
//           payload: request
//       }
//   }