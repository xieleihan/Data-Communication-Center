import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Modal } from 'antd';
import '../static/css/HomeView.less';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 导入图片
import avater from '../assets/images/avater.jpg';
import ClosePower from '../assets/icon/closePower.png';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

function formatTime(date: Date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${date.toLocaleTimeString()}`;
}

// 自动更新时间函数
function useTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setTimeout(() => {
        // 时间格式 2024-10-11 12:00:00
        setTime(formatTime(new Date()));
    }, 1000);
    return time;
}

function HomeView() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('你确定要退出登录吗?');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('好的,即将退出登录,请保存好你的个人数据...');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            localStorage.removeItem('AUTO_TOKEN');
            navigate('/');
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    
    return (
        <Layout style={{ minHeight: '100vh' }}> {/* Ensure full screen height */}
            <Header style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
                <div className="left" style={{display:'flex',alignItems:'center'}}>
                    <div className='logo'>
                        <img src="/icon/logo.png" alt="" />
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items1}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                </div>
                <div className="right">
                    <div className='time'>
                        <span>{useTime() }</span>
                    </div>
                    <div className='avater'>
                        <img src={avater} alt="" />
                        <span>这是用户名</span>
                    </div>
                    <div className='exitLogin' onClick={() => {
                        
                        // localStorage.removeItem('AUTO_TOKEN');
                        showModal()
                    }}>
                        <img src={ClosePower} alt="" />
                        <span>退出登录</span>
                    </div>
                </div>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
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
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                SouthAki ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
            <Modal
                title="提示"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </Layout>
        
    );
}

export default HomeView;
