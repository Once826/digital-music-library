import { Layout, List, Skeleton } from 'antd';
import SideBarComponent from '../components/SideBarComponent';
import HeaderComponent from '../components/HeaderComponent';
import { Artist, Song } from '../types/interfaces';
import { useEffect, useState } from 'react';
import { GetArtists, GetSongs } from '../api/apiHelper';
import Title from 'antd/es/typography/Title';

const { Content, Footer } = Layout;

export default function SongListPage() {
    const [songs, setSongs] = useState<Song[]>([]);
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetSongs();
                setSongs(response);
                const artistsResponse = await GetArtists();
                setArtists(artistsResponse);
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
              <Title level={2} style={{ marginTop: '60px', textAlign: 'left'}}>Tracklist</Title>
              {loading ? (
                        <>
                            <Skeleton active />
                            <Skeleton active />
                            <Skeleton active />
                        </>
                    ) : (
                        <List
                            bordered
                            dataSource={songs}
                            renderItem={(track, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<Title level={5}>{index + 1}. {track.title} - {track.length}</Title>}
                                    description={`${track.album.title} - ${artists.find(artist => {return artist._id === track.album.artist})?.name}`} />
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