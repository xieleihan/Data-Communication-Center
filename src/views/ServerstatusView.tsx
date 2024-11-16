import NavTopComponent from '../components/NavTopcomponent';
import { Layout } from 'antd';

const { Content } = Layout;

function ServerstatusView() {
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <NavTopComponent />
                <Content>
                    服务器状态
                </Content>
            </Layout>
        </>
    )
}

export default ServerstatusView;