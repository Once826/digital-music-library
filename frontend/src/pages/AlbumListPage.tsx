import { Card, Layout, List, Skeleton } from 'antd';
import SideBarComponent from '../components/SideBarComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Album } from '../types/interfaces';
import { useEffect, useState } from 'react';
import { GetAlbums } from '../api/apiHelper';
import { Link } from 'react-router-dom';

const { Content, Footer } = Layout;

export default function AlbumListPage() {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artistsResponse = await GetAlbums();
                setAlbums(artistsResponse);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBarComponent />
            <Layout>
              <HeaderComponent />
              <Content style={{ margin: '0 16px' }}>
              {loading ? (
                        <>
                            <Skeleton active />
                            <Skeleton active />
                            <Skeleton active />
                        </>
                    ) : (
              <List
                      grid={{ gutter: 16, column: 3 }}
                      dataSource={albums}
                      renderItem={(album) => (
                      <List.Item>
                              <Card hoverable title={album.title} style={{width: 600}} extra={<Link key={album._id} to={{ pathname: `/albums/${album._id}` }} >More</Link>}>
                              {album.description}
                              </Card>
                      </List.Item>
                      )}
                  />)}
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Digital Music Library ©{new Date().getFullYear()} Created by Botond Brem
              </Footer>
            </Layout>
          </Layout>
      );
};
