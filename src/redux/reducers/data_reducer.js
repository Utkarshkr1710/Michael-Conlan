import {
    // DEMO_TYPE
 
 } from '../actions/types';
  
 initialState = ({
     
 })
 
 export default function(state=initialState,action){
     switch(action.type){
         case 'DEMO_TYPE':
             return {...state, data: action.payload}
 
 
         default:
             return state;
     }
 }