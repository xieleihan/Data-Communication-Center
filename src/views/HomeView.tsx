import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import '../static/css/HomeView.less';
import NavTopComponent from '../components/NavTopcomponent';
import { Outlet, useNavigate } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

// Explicitly define items2
const items2: MenuProps['items'] = [
    {
        key: 'sub1',
        icon: React.createElement(UserOutlined),
        label: '用户管理',
        children: [
            { key: '1', label: '用户分布' },
            { key: '2', label: '用户信息' },
            { key: '3', label: 'option3' },
            { key: '4', label: 'option4' },
        ],
    },
    {
        key: 'sub2',
        icon: React.createElement(LaptopOutlined),
        label: '信息管理',
        children: [
            { key: '5', label: '文章详情' },
            { key: '6', label: '发布文章' },
            { key: '7', label: 'option7' },
            { key: '8', label: 'option8' },
        ],
    },
    {
        key: 'sub3',
        icon: React.createElement(NotificationOutlined),
        label: '其他更多',
        children: [
            { key: '9', label: 'option9' },
            { key: '10', label: 'option10' },
            { key: '11', label: 'option11' },
            { key: '12', label: 'option12' },
        ],
    },
];

function HomeView() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const breadcrumbItems = [
        { title: 'Home', href: '/home' },
        { title: 'Status', href: '/server' },
        { title: 'About', href: '/about' },
    ];

    const navigate = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}> {/* Ensure full screen height */}
            <NavTopComponent />
            <Content style={{ padding: '0 48px' }}>
                
                <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItems} />
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        height: '100%', // Ensure it fills the parent height
                    }}
                >
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                            onClick={(e) => {
                                // console.log('click ', e.key);
                                switch (e.key) {
                                    case '1':
                                        navigate('/home/userdistributed');
                                        break;
                                    case '2':
                                        // console.log('用户信息');
                                        navigate('/home/userinfo');
                                        break;
                                    case '3':
                                        console.log('option3');
                                        break;
                                    case '4':
                                        console.log('option4');
                                        break;
                                    case '5':
                                        navigate('/home/wordinfo');
                                        break;
                                    case '6':
                                        navigate('/home/infoadd');
                                        break;
                                    case '7':
                                        console.log('option7');
                                        break;
                                    case '8':
                                        console.log('option8');
                                        break;
                                    case '9':
                                        console.log('option9');
                                        break;
                                    case '10':
                                        console.log('option10');
                                        break;
                                    case '11':
                                        console.log('option11');
                                        break;
                                    case '12':
                                        console.log('option12');
                                        break;
                                    default:
                                        break;
                                }
                            }}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                SouthAki ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
            
        </Layout>
        
    );
}

export default HomeView;
