import { Card, Row, Skeleton, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Artist } from '../types/interfaces'
import { GetArtists } from "../api/apiHelper";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import { BACKEND_API_ENDPOINT } from "../config/config";

const ArtistsComponent = () => {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
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
        <Typography.Title>Artists</Typography.Title>
        <Row gutter={[16, 16]}>
            <Space size='large' wrap>
                    {loading ? (
                        <>
                            <Skeleton active />
                            <Skeleton active />
                            <Skeleton active />
                        </>
                    ) : (
                        artists && artists.map((artist) => (
                            <Link key={artist._id} to={{ pathname: `/artists/${artist._id}` }}>
                                <Card hoverable cover={<img alt="example" src={`${BACKEND_API_ENDPOINT}/images/${artist.name}.png`} style={{ objectFit: 'cover' }}/>} style={{ width: 500 }} >
                                    <Meta title={artist.name} />
                                </Card>
                            </Link>
                        ))
                    )}
            </Space>
        </Row>
        </>
    );
};

export default ArtistsComponent;
