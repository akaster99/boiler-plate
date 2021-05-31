import {
    PROFILE_PAGE,
    HOME_PAGE,
    STUDENT_MANAGE_PAGE
} from './types'

export async function profilePage(dataToSubmit){
    try{

        return {
            type: PROFILE_PAGE,
            payload: dataToSubmit
        }
    }catch(err){
        return err;
    }
}
export async function homePage(dataToSubmit){
    try{

        return {
            type: HOME_PAGE,
            payload: dataToSubmit
        }
    }catch(err){
        return err;
    }
}
export async function studentManagePage(dataToSubmit){
    try{

        return {
            type: STUDENT_MANAGE_PAGE,
            payload: dataToSubmit
        }
    }catch(err){
        return err;
    }
}