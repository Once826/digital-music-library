import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography, List, Skeleton } from 'antd';
import { GetAlbum } from '../api/apiHelper';
import { Album } from '../types/interfaces';

const { Title, Text } = Typography;

const AlbumDetailedComponent = () => {
    const { albumId } = useParams<{albumId: string}>();
    const [album, setAlbum] = useState<Album>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbumDetails = async () => {
        try {
            const response = await GetAlbum(albumId as string);
            setAlbum(response);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch album details', error);
            setLoading(false);
        }
        };

        fetchAlbumDetails();
    }, [albumId]);

    if (loading) {
        return <Skeleton active />;
    }

    if (!album) {
        return <div>Album not found</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
        <Row gutter={16} justify='center'>
            <Col span={16} style={{ textAlign: 'center' }}>
            <Title>{album.title}</Title>
            <Text type="secondary">{album.description}</Text>
            <Title level={2} style={{ marginTop: '60px', textAlign: 'left'}}>Tracklist</Title>
            <List
                bordered
                dataSource={album.songs}
                renderItem={(track, index) => (
                <List.Item>
                    <Title level={5}>{index + 1}. {track.title} - {track.length}</Title>
                </List.Item>
                )}
            />
            </Col>
        </Row>
        </div>
    );
};

export default AlbumDetailedComponent;