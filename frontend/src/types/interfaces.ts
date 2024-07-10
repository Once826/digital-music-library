export interface Artist {
    _id: string,
    name: string,
    albums: Album[]
}

export interface Album {
    _id: string,
    title: string,
    description: string,
    songs: Song[],
    artist: Artist,
}

export interface Song {
    _id: string,
    title: string,
    length: string,
    album: AlbumSmall
}

interface AlbumSmall {
    _id: string,
    title: string,
    description: string,
    songs: string[],
    artist: string,
}