import { theme, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import SearchComponent from './SearchComponent';

const SideBarComponent = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header style={{ display: 'flex', alignItems: 'center', background: colorBgContainer, marginBottom: '20px' }} >
            <Typography.Title style={{ color: '#001529' }}>Digital Music Library</Typography.Title>
            <div style={{ marginLeft: 'auto' }}>
            <SearchComponent />
            </div>
        </Header>
    );
    
}

export default SideBarComponent;
