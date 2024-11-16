import NavTopComponent from '../components/NavTopcomponent';
import { Layout } from 'antd';

const { Content } = Layout;

function AboutView() {
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <NavTopComponent />
                <Content>
                    content
                </Content>
            </Layout>
        </>
    )
}

export default AboutView;