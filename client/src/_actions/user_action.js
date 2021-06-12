import axios from 'axios';
import * as config from '../Config';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
} from './types'

export async function loginUser(dataToSubmit){
    try{
        const request = await axios.post(`${config.BACK_URL}/api/login`, dataToSubmit, { withCredentials: true });

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
        const request = await axios.post(`${config.BACK_URL}/api/register`, dataToSubmit, { withCredentials: true });

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
        const request = await axios.get(`${config.BACK_URL}/api/auth`, { withCredentials: true });
        return {
            type: AUTH_USER,
            payload: request.data
        }
    }catch(err){
        return err;
    }
}
