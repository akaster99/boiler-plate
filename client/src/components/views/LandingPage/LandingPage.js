import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footbar/Footbar';
import {withRouter} from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

const { Content} = Layout;


function LandingPage(props) {
    
    return (
        <Layout className="layout">
            <Navbar/>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}

export default withRouter(LandingPage)
