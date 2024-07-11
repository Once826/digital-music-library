import { Layout } from 'antd';
import SideBarComponent from '../components/SideBarComponent';
import HeaderComponent from '../components/HeaderComponent';
import ArtistsComponent from '../components/ArtistsComponent';
import Title from 'antd/es/typography/Title';
import AlbumsComponent from '../components/AlbumsComponent';

const { Content, Footer } = Layout;




export default function HomePage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBarComponent />
      <Layout>
        <HeaderComponent />
        <Content style={{ margin: '0 16px'}}>
          <Title style={{ textAlign: 'center' }}>Wellcome to Digital Music Library</Title>
          <ArtistsComponent />
          <AlbumsComponent />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Digital Music Library ©{new Date().getFullYear()} Created by Botond Brem
        </Footer>
      </Layout>
    </Layout>
  );
};
