import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Banner from './components/NavBar/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/about'
import Housing from './pages/housing/housing'
import Error from './pages/error/error'
import './index.scss'

 
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Banner />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,

)

