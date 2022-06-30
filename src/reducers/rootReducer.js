
import { combineReducers } from 'redux';
import multAndDivtnReducerNumber from './multAndDivtnReducerNumber';
import incAndDecReducerNumber from './incAndDecReducerNumber';

const rootReducer = combineReducers({
    incAndDecReducerNumber,
    multAndDivtnReducerNumber
});

export default rootReducer;