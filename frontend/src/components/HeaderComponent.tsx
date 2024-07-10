import { theme, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';

const SideBarComponent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer, marginBottom: '20px' }} >
            <Typography.Title style={{ color: '#001529' }}>Digital MusicLibrary</Typography.Title>
        </Header>
    );
    
}

export default SideBarComponent;
