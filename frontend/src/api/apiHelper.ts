import axios from 'axios';
import { BACKEND_API_ENDPOINT } from '../config/config';
import { Album, Artist, SearchResult, Song } from '../types/interfaces';

async function SendGetRequest(url: string) {
    document.body.style.cursor = 'wait';

    return await axios
        .get(url)
        .then(response => {
            document.body.style.cursor = 'default';
            return response.data;
        })
        .catch(function(error) {
            document.body.style.cursor = 'default';
            console.log(error.toJSON());
        });
}

export async function GetArtists() {
    let url = `${BACKEND_API_ENDPOINT}/artists/`;
    return await SendGetRequest(url) as Artist[];
}

export async function GetArtist(artistId: string) {
    let url = `${BACKEND_API_ENDPOINT}/artists/${artistId}`;
    return await SendGetRequest(url) as Artist; 
}

export async function GetAlbums() {
    let url = `${BACKEND_API_ENDPOINT}/albums/`;
    return await SendGetRequest(url) as Album[];
}

export async function GetAlbum(albumId: string) {
    let url = `${BACKEND_API_ENDPOINT}/albums/${albumId}`;
    return await SendGetRequest(url) as Album;
}

export async function GetSongs() {
    let url = `${BACKEND_API_ENDPOINT}/songs/`;
    return await SendGetRequest(url) as Song[];
}

export async function GetSong(songId: string) {
    let url = `${BACKEND_API_ENDPOINT}/songs/${songId}`;
    return await SendGetRequest(url) as Song;
}

export async function Search(parmeter: string) {
    let url = `${BACKEND_API_ENDPOINT}/search?search=${parmeter}`;
    return await SendGetRequest(url) as SearchResult;
}
