import { combineReducers } from 'redux';
import sliderData from './slider';
import nextMatchData from './upcomingmatch'
import videoData from './video'
import funFacts from './/funfacts'

const RootReducer = combineReducers({
    sliderData,
    nextMatchData,
    videoData,
    funFacts
});

export default RootReducer;