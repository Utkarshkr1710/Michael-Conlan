import { combineReducers } from 'redux';
import sliderData from './slider';
import nextMatchData from './upcomingmatch'
import videoData from './video'
import funFacts from './/funfacts'
import gallery from './gallery'

const RootReducer = combineReducers({
    sliderData,
    nextMatchData,
    videoData,
    funFacts,
    gallery
});

export default RootReducer;