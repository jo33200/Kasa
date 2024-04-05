import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Survey from './pages/Survey'
import Header from './components/Header'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Survey" element={<Survey />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)