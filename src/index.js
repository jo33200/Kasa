import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import Home from './pages/home/Home'
import APropos from './pages/A-propos/APropos'
import Logement from './pages/logement/logement'
import Error from './pages/erreur/erreur'
import './index.scss'

 
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Banner />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/logement" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,

)

