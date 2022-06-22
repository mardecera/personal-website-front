import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home'
import NotFound from './views/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" status={404} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
