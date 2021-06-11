import React, { useEffect , useState} from 'react';
import ANavbar from '../ANavBar/ANavBar';
import Footer from '../../Footbar/Footbar';
import {withRouter} from 'react-router-dom';
import { Layout, Breadcrumb, Table, Space, Button} from 'antd';
import {useHistory} from "react-router";



const { Content} = Layout;


function AStudentPage(props) {
    const [Users, setUsers] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('/api/user/All')
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
        title: 'Level',
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
        render: (record) => (
          <Space size="large">
            <Button onClick={()=>{editHandler(record._id)}}>Edit</Button>
            <Button onClick={()=>{deleteHandler(record._id)}}>Delete</Button>
          </Space>
        ),
      },
    ];
    const editHandler = (_id)=>{
      fetch(`/api/user/id/${_id}`)
      .then(response=> response.json())
      .then(response => {
        console.log(_id)
        history.push({
          pathname: `/admin/student/edit/${_id}`,
          state:{ userData: response.userData}
        })  
      })
    }
    const deleteHandler = (_id)=>{
      fetch(`/api/user/delete/${_id}`,{
        method: 'GET'
      }).then( response=>{
        fetch('/api/user/All')
            .then(response=> response.json())
            .then(response => {
                setUsers(response.usersData)    
            })
      })
    }
    
    return (
        <Layout className="layout">
            <ANavbar/>
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
