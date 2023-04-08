import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from '../Library/library';
import Feed from '../Feed/feed';
import Trending from '../Trending/trending';
import Player from '../Player/player';
import Favorites from '../Favorites/favorites';
import './Home.css';
import Sidebar from '../../components/Sidebar/sidebar';

export default function Home() {
    return (
        <Router>
        <div className='main-body'>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Library/>} />
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/trending" element={<Trending/>}/>
                <Route path="/player" element={<Player/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
        </div>
        </Router>
    );
}

