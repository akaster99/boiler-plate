import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {auth } from '../_actions/user_action';


// eslint-disable-next-line import/no-anonymous-default-export
export default function(SpecificComponent, option, adminRoute = null){
    //null 누구나 입장 가능
    //true 로그인 한 사람만 입장 가능
    //false 로그인 하지 않은 사람만 입장 가능


    function AuthenticationCheck(props){
        const dispatch = useDispatch();
        dispatch(auth()).then(response=>{
            console.log(response.payload.isAuth)
        //로그인 안한 상태
            if(!response.payload.isAuth){
                if(option){
                    props.history.push('/login');
                }else{
                    return <SpecificComponent />
                }
            }else{ //로그인 한 상태
                if(adminRoute){
                    if(!(response.payload.role === 2)){
                        //일반 사용자가 어드민에 접근
                        props.history.push('/')
                    }
                }
                if(!option){
                    props.history.push('/')
                }
            }
        })
        return <SpecificComponent />

    }

    return AuthenticationCheck
}
