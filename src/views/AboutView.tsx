import NavTopComponent from '../components/NavTopcomponent';
import { Layout, theme } from 'antd';
import '../static/css/AboutView.less';

const { Content } = Layout;

function AboutView() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <NavTopComponent />
                <Content style={{ padding: '48px 48px' }}>
                    <Layout
                        style={{
                            padding: '24px 0',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            height: '100%', // Ensure it fills the parent height
                        }}
                    >
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <h2>关于项目</h2>
                            <div className='content'>
                                <div className="left">
                                    <img src="/icon/favicon.png" alt="" />
                                </div>
                                <div className="right">
                                    <h2>技术栈</h2>
                                    <p>React + TypeScript</p>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </>
    )
}

export default AboutView;