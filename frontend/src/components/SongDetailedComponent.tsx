import { List } from 'antd';
import { Artist, Song } from '../types/interfaces';
import { useEffect, useState } from 'react';
import { GetArtists, GetSong } from '../api/apiHelper';
import Title from 'antd/es/typography/Title';
import { useParams } from 'react-router-dom';

export default function SongListPage() {
    const { songId } = useParams<{songId: string}>();
    const [song, setSong] = useState<Song>();
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(songId)
                const response = await GetSong(songId as string);
                console.log(response);
                setSong(response);
                const artistsResponse = await GetArtists();
                setArtists(artistsResponse);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        console.log(song);
    }, []);

    return (
        <>
            <Title level={2} style={{ marginTop: '60px', textAlign: 'left'}}>{song?.title}</Title>
              
            <List bordered>
                <List.Item><Title level={5}>Length: {song?.length}</Title></List.Item>
                <List.Item><Title level={5}>Artist: {artists.find(artist => {return artist._id === song?.album.artist})?.name}</Title></List.Item>
                <List.Item>
                    <Title level={5}>Album: {song?.album.title}</Title>
                    {song?.album.description}
                </List.Item>
            </List>
                            
        </>
    );
};