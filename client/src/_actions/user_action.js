import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
} from './types'

export async function loginUser(dataToSubmit){
    try{
        const request = await axios.post('/api/login', dataToSubmit);

        return {
            type: LOGIN_USER,
            payload: request.data
        }
    }catch(err){
        return err;
    }
}

export async function registerUser(dataToSubmit){
    try{
        const request = await axios.post('/api/register', dataToSubmit);

        return {
            type: REGISTER_USER,
            payload: request.data
        }
    }catch(err){
        return err;
    }
}

export async function auth(){
    try{
        const request = await axios.get('/api/auth');
        return {
            type: AUTH_USER,
            payload: request.data
        }
    }catch(err){
        return err;
    }
}
