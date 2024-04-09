import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import Home from './pages/home/Home'
import './index.scss'

 
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Banner />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,

)

