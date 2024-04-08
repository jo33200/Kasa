import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import './index.scss'

 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            
            <Banner />
            <Routes>
                {/*<Route path="/" element={<Home />} />*/}
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)

