import {combineReducers} from 'redux';
import page from './page_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    user,
    page
})

export default rootReducer;
