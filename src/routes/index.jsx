import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, NotFound } from '../views'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" status={404} element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default App
