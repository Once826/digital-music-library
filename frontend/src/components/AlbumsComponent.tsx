import { Card, List, Skeleton, Typography } from 'antd';
import { Album } from '../types/interfaces';
import { useEffect, useState } from 'react';
import { GetAlbums } from '../api/apiHelper';
import { Link } from 'react-router-dom';


const AlbumsComponent = () => {
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
        <>
        <Typography.Title>Albums</Typography.Title>
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
                />
            )}
        </>
      );
};

export default AlbumsComponent;
