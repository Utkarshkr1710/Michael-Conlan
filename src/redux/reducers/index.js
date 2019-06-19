import { combineReducers } from 'redux';
import sliderData from './slider';
import nextMatchData from './upcomingmatch'
import videoData from './video'
import funFacts from './/funfacts'
import gallery from './gallery'
import sponsor from './sponsor'
import legal from './legal'
import bio from './bio';

const RootReducer = combineReducers({
    sliderData,
    nextMatchData,
    videoData,
    funFacts,
    gallery,
    bio,
    sponsor,
    legal
});

export default RootReducer;