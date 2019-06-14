import { combineReducers } from 'redux';
import sliderData from './slider';
import nextMatchData from './upcomingmatch'
import videoData from './video'

const RootReducer = combineReducers({
    sliderData,
    nextMatchData,
    videoData
});

export default RootReducer;