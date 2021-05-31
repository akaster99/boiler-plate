import {
    PROFILE_PAGE,
    HOME_PAGE,
    STUDENT_MANAGE_PAGE
} from '../_actions/types';


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action) {
    switch (action.type) {
        case PROFILE_PAGE:
            console.log('PROFILE_PAGE');
            return {...state, page: action.payload}
        case HOME_PAGE:
            console.log('HOME_PAGE');
            return {...state, page: action.payload}
        case STUDENT_MANAGE_PAGE:
            console.log('STUDENT_MANAGE_PAGE');
            return {...state, page: action.payload}
        default:
            return state;
    }
}