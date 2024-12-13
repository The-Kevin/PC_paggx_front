import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Identification } from './pages/identification.tsx'
import { IdentificationChoose } from './pages/identificationChoose.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='identification'>
        <Route path='' element={<Identification />} />
        <Route path='type' element={<IdentificationChoose />} />
      </Route>

    </Routes>
  </BrowserRouter>
)
