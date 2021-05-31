import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    ALL_USER
} from '../_actions/types';


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER :
            console.log('LOGIN_USER');
            return { ...state,loginSuccess: action.payload}

        case REGISTER_USER :
            console.log('REGISTER_USER');
            return { ...state, register: action.payload}
        
        case AUTH_USER:
            console.log('AUTH_USER');
            return {...state, userData: action.payload}

        default:
            return state;
    }
}