import React from 'react';
import {useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import {withRouter} from 'react-router-dom';
import './LoginPage.css';

import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

function LoginPage(props) {
    const dispatch = useDispatch();


    const onFinish = (value) => {
        console.log(value.email);
        let body = {
            email:value.email,
            password:value.password,
        }
        dispatch(loginUser(body))
        .then(response =>{
            if(response.payload.loginSuccess){
                console.log(response)
                props.history.push('/')
            }else{
                alert('failed to login');
            }
        })
    };
    
    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight:'100vh'}} >
        <Col type="flex" justify="center" align="middle">
        <h1>Login</h1>
        <Card>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
      </Card>
      </Col>
      </Row>
    )
}

export default withRouter(LoginPage)
