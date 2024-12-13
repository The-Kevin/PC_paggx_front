import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Identification } from './pages/identification.tsx'
import { IdentificationType } from './pages/IdentificationType.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='identification'>
        <Route path='' element={<Identification />} />
        <Route path=':type' element={<IdentificationType />} />
      </Route>

    </Routes>
  </BrowserRouter>
)
