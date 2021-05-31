import React, { useEffect , useState} from 'react';
import ANavbar from '../ANavBar/ANavBar';
import Footer from '../../Footbar/Footbar';
import {useLocation, withRouter} from 'react-router-dom';
import { Layout, Breadcrumb, Button, Form, Input, InputNumber} from 'antd';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  };

const { Content } = Layout;

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

function AStudentEditPage(props) {
  const location = useLocation();
  const User = location.state.userData;
    // const user_id = props.match.params._id;
  const onFinish = (e) => {
    console.log(e.user.role);
    if(e.user.name){
      User.name = e.user.name;
    }
    if(e.user.email){
      User.email = e.user.email;
    }
    if(e.user.role !== undefined){
      User.role = e.user.role;
    }
    if(e.user.password){
      User.password = e.user.password;
    }
    fetch('/api/user/update',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        User
      })
    }).then( response=>{
      console.log(User);
      props.history.push('/admin/student')
    })
  
    
  };
    return (
        <Layout className="layout">
            <ANavbar/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Student</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit</Breadcrumb.Item>
                </Breadcrumb>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            
          },
        ]}
      >
        <Input defaultValue={User.name}/>
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          
          },
        ]}
      >
        <Input defaultValue={User.email}/>
      </Form.Item>
      <Form.Item
        name={['user', 'role']}
        label="Role"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 2,
          
          },
        ]}
      >
        <InputNumber defaultValue={User.role} />
      </Form.Item>
      <Form.Item
            name={['user', 'password']}
            label="비밀 번호"
            rules={[
            {
                message: '비밀번호를 입력해 주세요!',
            },
            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name={['user', 'confirm']}
            label="비밀번호 확인"
            dependencies={['user', 'password']}
            hasFeedback
            rules={[
            {
                
                message: '비밀번호를 다시 입력해 주세요!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue(['user','password']) === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('비밀번호 확인이 일치하지 않습니다.'));
                },
            }),
            ]}
        >
            <Input.Password />
        </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
            </Content>
            <Footer />
        </Layout>
    )
}

export default withRouter(AStudentEditPage)
