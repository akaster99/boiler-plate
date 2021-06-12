import React from 'react'
import axios from 'axios';
import { Layout, Menu } from 'antd';
import { Avatar } from 'antd';
import { withRouter } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import {profilePage, homePage,studentManagePage} from '../../../../_actions/page_action';
import { useDispatch } from 'react-redux';
import * as config from '../../../../Config';


const { Header} = Layout;
const {SubMenu} = Menu;


function NavBar(props) {
    const dispatch = useDispatch();
    const logoutHandler = async () =>{
        try{
            const ares = await axios.get(`${config.BACK_URL}/api/logout`, { withCredentials: true });
            if(ares.data.success){
                props.history.push('/login');
                console.log(ares.data.success);
            }else{
                alert('로그인 상태가 아닙니다.');
            }
        }catch(err){
            return alert('로그아웃 중 에러 발생');
        }
    }
    const profileHandler = ()=>{
        console.log('profile');
        let body = {
            page:'profile',
        }
        dispatch(profilePage(body))
        .then(response =>{
            if(response.payload.page){
                console.log(response)
                props.history.push('/profile');
            }else{
                alert('failed to show');
            }
        })
    }
    const homeHandler = ()=>{
        console.log('Ahome');
        let body = {
            page:'Ahome',
        }
        dispatch(homePage(body))
        .then(response =>{
            if(response.payload.page){
                console.log(response)
                props.history.push('/admin');
            }else{
                alert('failed to show');
            }
        })
    }
    const studentHandler = ()=>{
        console.log('student');
        let body = {
            page:'studentManage',
        }
        dispatch(studentManagePage(body))
        .then(response =>{
            if(response.payload.page){
                console.log(response)
                props.history.push('/admin/student');
            }else{
                alert('failed to show');
            }
        })
    }

    return (
        <Header>
            <div className="logo" />
                <Menu theme="dark" mode="horizontal" >
                
                    <Menu.Item onClick={homeHandler} key="home">AdminHOME</Menu.Item>
                    <Menu.Item onClick={studentHandler} key="student">학생</Menu.Item>
                    <Menu.Item key="lecture">수업</Menu.Item>
                    <SubMenu key="profile" style={{float:'right'}} icon= {<Avatar size={30} icon={<UserOutlined/>}/>}>
                        <Menu.Item onClick={profileHandler}key="profile">Profile</Menu.Item>
                        <Menu.Item onClick={logoutHandler} key="logout">Logout</Menu.Item>
                    </SubMenu>
                </Menu>

        </Header>
    )
}

export default withRouter(NavBar)
