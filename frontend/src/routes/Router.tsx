import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArtistPage from '../pages/ArtistPage';
import AlbumPage from '../pages/AlbumPage';
import ArtistListPage from '../pages/ArtistListPage';
import AlbumListPage from '../pages/AlbumListPage';
import SongListPage from '../pages/SongListPage';
import SongPage from '../pages/SongPage';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path='/artists' element={ <ArtistListPage /> } />
            <Route path='/albums' element={ <AlbumListPage /> } />
            <Route path='/songs' element={ <SongListPage /> } />
            <Route path='/artists/:artistId' element={ <ArtistPage /> } />
            <Route path='/albums/:albumId' element={ <AlbumPage /> } />
            <Route path='/songs/:songId' element={ <SongPage />} />
        </Routes>
    )
}