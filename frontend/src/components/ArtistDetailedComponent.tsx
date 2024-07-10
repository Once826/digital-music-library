import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetArtist } from "../api/apiHelper";
import { Artist } from "../types/interfaces";
import { Card, Col, Image, List, Row, Skeleton } from "antd";
import { BACKEND_API_ENDPOINT } from "../config/config";
import Title from "antd/es/typography/Title";


const ArtistDetailedComponent = () => {
    const { artistId } = useParams<{ artistId: string}>();
    const [artist, setArtist] = useState<Artist>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtistDetails = async () => {
            try {
                const response = await GetArtist(artistId as string);
                setArtist(response);
            } catch (error) {
                console.error('Error fetching artist details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArtistDetails();
    }, [artistId]);

    if (loading) {
        return <Skeleton active />;
    }

    if (!artist) {
        return <div>Artist not found</div>;
    }

    return (
        <Row justify='center'>
            <Col style={{ textAlign: 'center' }}>
                <Title>{artist.name}</Title>
                <Image
                    width={640}
                    src={`${BACKEND_API_ENDPOINT}/images/${artist.name}.png`}
                />
            </Col>
            <Col offset={4} style={{ textAlign: 'center' }}>
                <Title level={2}>Albums</Title>
                <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={artist.albums}
                    renderItem={(album) => (
                    <List.Item>
                            <Card hoverable title={album.title} style={{width: 500}} extra={<Link key={album._id} to={{ pathname: `/albums/${album._id}` }} >More</Link>}>
                            {album.description}
                            </Card>
                    </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
}

export default ArtistDetailedComponent;
