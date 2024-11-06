import './style.css'

import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Ships from './pages/Ships';
import Details from './pages/Details';
import Nav from './components/Nav'

export default function App(){
    return (
        <div className = 'App'>
            <Nav />
            <Routes>
                <Route path = '/' element={<Main />} />
                <Route path = '/ships' element={<Ships />} />
                <Route path = '/ships/:name' element={<Details />} />
            </Routes>
        </div>
    )
}