import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Index from './pages/Index'

//@TODO
const Dummy1 = () => <li>Dummy1</li>
const Dummy2 = () => <li>Dummy2</li>
const Dummy3 = () => <li>Dummy3</li>

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/d1" element={<Dummy1 />} />
        <Route path="/d2" element={<Dummy2 />} />
        <Route path="/d3" element={<Dummy3 />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
