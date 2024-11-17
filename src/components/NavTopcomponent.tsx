import type { MenuProps } from 'antd';
import { Layout, Menu, Modal } from 'antd';
import '../static/css/HomeView.less';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dispatch } from 'redux';

// 导入图片
import avater from '../assets/images/avater.jpg';
import ClosePower from '../assets/icon/closePower.png';

const { Header } = Layout;

const items1: MenuProps['items'] = [
    {
        key: '1',
        label: '首页',
    },
    {
        key: '2',
        label: '服务器状态',
    },
    {
        key: '3',
        label: '关于',
    },
];

function formatTime(date: Date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(
        2,
        '0'
    )} ${date.toLocaleTimeString()}`;
}

function useTime() {
    const [time, setTime] = useState(formatTime(new Date()));
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formatTime(new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return time;
}

interface NavTopComponentProps {
    topIndex: string;
    changeTopIndex: (index: string) => void;
}

function NavTopComponent(props: NavTopComponentProps) {
    const navigate = useNavigate();
    const location = useLocation();

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
        setOpen(false);
    };

    useEffect(() => {
        // 根据路由设置对应的 topIndex
        const routeToIndexMap: Record<string, string> = {
            '/home': '1',
            '/server': '2',
            '/about': '3',
        };
        const currentIndex = routeToIndexMap[location.pathname] || '1';
        props.changeTopIndex(currentIndex);
    }, [location.pathname, props]);


    return (
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="left" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="logo">
                    <img src="/icon/logo.png" alt="" />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[props.topIndex]}
                    items={items1}
                    onClick={(e) => {
                        props.changeTopIndex(e.key);
                        switch (e.key) {
                            case '1':
                                navigate('/home/userdistributed');
                                break;
                            case '2':
                                navigate('/server');
                                break;
                            case '3':
                                navigate('/about');
                                break;
                            default:
                                break;
                        }
                    }}
                />
            </div>
            <div className="right">
                <div className="time">
                    <span>{useTime()}</span>
                </div>
                <div className="avater">
                    <img src={avater} alt="" />
                    <span>这是用户名</span>
                </div>
                <div className="exitLogin" onClick={showModal}>
                    <img src={ClosePower} alt="" />
                    <span>退出登录</span>
                </div>
            </div>
            <Modal
                title="提示"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </Header>
    );
}

interface RootState {
    topIndex: string;
}

const mapStateToProps = (state: RootState) => ({
    topIndex: state.topIndex,
    
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeTopIndex: (index: string) => {
        // console.log('Changing Top Index:', index);
        dispatch({
            type: 'changeTopIndex',
            value: index, // 这里改为 value，与 reducer 匹配
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavTopComponent);
