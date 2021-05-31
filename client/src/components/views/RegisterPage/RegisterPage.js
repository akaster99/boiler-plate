import React from 'react';
import {useDispatch} from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import {withRouter} from 'react-router-dom';
import {
    Form,
    Input,
    Row,
    Col,
    Checkbox,
    Button,
    Card
  } from 'antd';



const formItemLayout = {
    labelCol: {
        xs: { span: 8 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 32 },
        sm: { span: 32 },
    },
    };
    const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 24,
        offset: 0,
        },
    },
};
  

function RegisterPage(props) {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (value)=>{
        let body = {
            email:value.email,
            name: value.name,
            password:value.password,
        }
        console.log(body);
        dispatch(registerUser(body))
        .then(response =>{
            console.log(response);
            if(response.payload.success){
                props.history.push('/login');
            }else{
                alert('failed to register');
            }
        })
    }


    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight:'100vh'}} >
        <Col type="flex" justify="center" align="middle">
        <h1>회원가입</h1>
        <Card>
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            layout="horizontal"
            onFinish={onFinish}
            scrollToFirstError
        >
        <Form.Item
            name="email"
            label="E-mail"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="password"
            label="비밀 번호"
            rules={[
            {
                required: true,
                message: '비밀번호를 입력해 주세요!',
            },
            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="confirm"
            label="비밀번호 확인"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: '비밀번호를 다시 입력해 주세요!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('비밀번호 확인이 일치하지 않습니다.'));
                },
            }),
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="name"
            label="이름"
            tooltip="당신의 이름을 입력해 주세요."
            rules={[{ required: true, message: '이름을 입력해 주세요!', whitespace: true }]}
        >
            <Input />
        </Form.Item>

        {/* <Form.Item label="Captcha" extra="자동 가입 방지">
            <Row gutter={8}>
            <Col span={14}>
                <Form.Item
                name="captcha"
                noStyle
                rules={[{ required: true, message: 'Captcha를 입력해 주세요.' }]}
                >
                <Input />
                </Form.Item>
            </Col>
            <Col span={10}>
                <Button>Get captcha</Button>
            </Col>
            </Row>
        </Form.Item> */}

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
            {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
            ]}
            {...tailFormItemLayout}
        >
            <Checkbox>
            약관을 읽었고 <a href="">동의</a>합니다.
            </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
            회원가입 하기
            </Button>
        </Form.Item>
        </Form>
        </Card>
      </Col>
      </Row>
    )
}

export default withRouter(RegisterPage)