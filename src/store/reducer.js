import { combineReducers } from 'redux';

// import {combineReducers} from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store';
import {reducer as homeReducer} from '../pages/Home/store'
import {reducer as detailReducer} from '../pages/Detail/store' 
import {reducer as loginReducer} from '../pages/login/store'
// as将reducer取一个别名headerReducer
 
const reducer = combineReducers({
    header: headerReducer,
    home:homeReducer,
    Detail:detailReducer,
    login:loginReducer
});
 
export default reducer;