import { Layout } from 'antd';
import SideBarComponent from '../components/SideBarComponent';
import HeaderComponent from '../components/HeaderComponent';
import AlbumsComponent from '../components/AlbumsComponent';

const { Content, Footer } = Layout;

export default function AlbumListPage() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBarComponent />
            <Layout>
              <HeaderComponent />
              <Content style={{ margin: '0 16px' }}>
              <AlbumsComponent />
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Digital Music Library ©{new Date().getFullYear()} Created by Botond Brem
              </Footer>
            </Layout>
          </Layout>
      );
};
