import { GET_LATEST_VIDEO } from '../actions/types'

 
initialState = ({
     
})

export default function(state=initialState,action){
    switch(action.type){
        case GET_LATEST_VIDEO:
            return {...state, latest: action.payload}


        default:
            return state;
    }
}