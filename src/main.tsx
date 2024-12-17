import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Identification } from './pages/identification.tsx'
import { IdentificationChoose } from './pages/identificationChoose.tsx'
import { Capture } from './pages/capture.tsx'
import { LoadingDocuments } from './pages/loadingDocuments/loadingDocuments.tsx'
import { FailLoadingDocuments } from './pages/loadingDocuments/failLoadingDocuments.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='identification'>
        <Route path='' element={<Identification />} />
        <Route path='type' element={<IdentificationChoose />} />
        <Route path='capture' element={<Capture />} />
        <Route path='loading_documents' element={<LoadingDocuments />} />
        <Route path='fail_loading_documents' element={<FailLoadingDocuments />} />

      </Route>

    </Routes>
  </BrowserRouter>
)
