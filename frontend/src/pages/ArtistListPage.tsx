import { Layout } from 'antd';
import SideBarComponent from '../components/SideBarComponent';
import HeaderComponent from '../components/HeaderComponent';
import ArtistsComponent from '../components/ArtistsComponent';

const { Content, Footer } = Layout;




export default function ArtistListPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBarComponent />
      <Layout>
        <HeaderComponent />
        <Content style={{ margin: '0 16px' }}>
          <ArtistsComponent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Digital Music Library ©{new Date().getFullYear()} Created by Botond Brem
        </Footer>
      </Layout>
    </Layout>
  );
};
