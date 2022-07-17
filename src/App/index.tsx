import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Index from './pages/Index'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
