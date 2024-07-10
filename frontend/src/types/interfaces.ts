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
    artistId: string,
}

export interface Song {
    _id: string,
    title: string,
    length: string,
    albumId: string
}