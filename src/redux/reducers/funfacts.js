import { GET_FUNFACTS } from '../actions/types'

 
initialState = ({
     
})

export default function(state=initialState,action){
    switch(action.type){
        case GET_FUNFACTS:
            return {...state, data: action.payload}


        default:
            return state;
    }
}