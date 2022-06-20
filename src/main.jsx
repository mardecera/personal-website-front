import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home'
import NotFound from './views/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
