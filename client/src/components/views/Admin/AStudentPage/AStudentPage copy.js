import React, { useEffect , useState} from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footbar/Footbar';
import {withRouter} from 'react-router-dom';
import { Layout, Breadcrumb, Table, Space,} from 'antd';



const { Content} = Layout;


function AStudentPage(props) {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/userAll')
            .then(response=> response.json())
            .then(response => {
                setUsers(response.usersData)    
            })
        
        
    }, [])
    const columns =  [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'Role',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="large">
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
    return (
        <Layout className="layout">
            <Navbar/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                    <Breadcrumb.Item>Student</Breadcrumb.Item>
                </Breadcrumb>
                <Table columns={columns} dataSource={Users}  />
            </Content>
            <Footer />
        </Layout>
    )
}

export default withRouter(AStudentPage)
