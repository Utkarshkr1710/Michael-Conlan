import { GET_SLIDER } from '../actions/types'

 
initialState = ({
     
})

export default function(state=initialState,action){
    switch(action.type){
        case GET_SLIDER:
            return {...state, data: action.payload}


        default:
            return state;
    }
}