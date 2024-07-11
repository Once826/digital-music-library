import { List, Skeleton } from 'antd';
import { Artist, Song } from '../types/interfaces';
import { useEffect, useState } from 'react';
import { GetArtists, GetSongs } from '../api/apiHelper';
import Title from 'antd/es/typography/Title';
import { Link, useNavigate } from 'react-router-dom';

const SongsComponent = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
        <>
            <Title level={2} style={{ marginTop: '60px', textAlign: 'left'}}>Songlist</Title>
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
                        <Link key={track._id} to={`/songs/${track._id}`}>
                            <List.Item onClick={() => {navigate(`/songs/${track._id}`)}}>
                                <List.Item.Meta
                                    title={<Title level={5}>{index + 1}. {track.title} - {track.length}</Title>}
                                    description={`${track.album.title} - ${artists.find(artist => {return artist._id === track.album.artist})?.name}`} />
                            </List.Item>
                        </Link>
                    )}
                    />
            )}
        </>
    );
};

export default SongsComponent;
