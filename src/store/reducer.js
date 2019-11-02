import { combineReducers } from 'redux';

// import {combineReducers} from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store';
// as将reducer取一个别名headerReducer
 
const reducer = combineReducers({
    header: headerReducer
});
 
export default reducer;