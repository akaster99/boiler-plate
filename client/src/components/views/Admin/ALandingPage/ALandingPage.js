import React from 'react';
import ANavbar from '../ANavBar/ANavBar';
import Footer from '../../Footbar/Footbar';
import {withRouter} from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Content} = Layout;


function ALandingPage(props) {
    
    return (
        <Layout className="layout">
            <ANavbar/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Admin</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default withRouter(ALandingPage)
