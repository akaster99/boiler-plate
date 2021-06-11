import React, { useEffect } from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footbar/Footbar';
import {withRouter} from 'react-router-dom';
import { Layout, Breadcrumb,Row,Col,Image,Button, Divider} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import store from '../../../store'
import {useHistory} from "react-router";

const { Content} = Layout;


function ProfilePage(props) {
    const history = useHistory();
    const user = store.getState().user.userData;
    let role;       
    if (user.role === 0){
        role = 'please verificate your email'
    }
    if (user.role === 1){
        role = 'student'
    }
    if (user.role === 2){
        role = 'admin'
    }

    const editHandler = ()=>{
        const _id = user._id
        fetch(`/api/user/id/${_id}`)
        .then(response=> response.json())
        .then(response => {
            console.log(_id)
            history.push({
            pathname: `/edit/${_id}`,
            state:{ userData: response.userData}
            })  
        })
    }

    return (
        <Layout className="layout">
            <Navbar/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Profile</Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={[16,16]}>
                    <Col span={8} >
                            <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <Button onClick={editHandler} block> Edit Profile</Button>
                            <Divider orientation="left" style={{borderWidth: 2}}>User Info</Divider> 
                            <p>username: {user.name}</p>
                            <p>email: {user.email} </p>
                            <p>level: {role}</p>
                    </Col>
                    <Col span={16}>
                        <h1>asdfasdfasdfadsf</h1>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    )
}

export default withRouter(ProfilePage)
