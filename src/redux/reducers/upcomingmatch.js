import { GET_UPCOMING_MATCH } from '../actions/types'

 
initialState = ({
     
})

export default function(state=initialState,action){
    switch(action.type){
        case GET_UPCOMING_MATCH:
            return {...state, data: action.payload}


        default:
            return state;
    }
}