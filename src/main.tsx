import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Identification } from './pages/identification.tsx'
import { IdentificationChoose } from './pages/identificationChoose.tsx'
import { CaptureDocuments } from './pages/captureDocuments.tsx'
import { LoadingDocuments } from './pages/loadingDocuments/loadingDocuments.tsx'
import { FailLoadingDocuments } from './pages/loadingDocuments/failLoadingDocuments.tsx'
import { ValidateSelfFace } from './pages/validateSelfFace.tsx'
import { CaptureSelfFace } from './pages/captureSelfFace.tsx'
import { LoadingSelfFace } from './pages/loadingSelfFace/loadingSelfFace.tsx'
import { Success } from './pages/success.tsx'
import { FailLoadingSelfFace } from './pages/loadingSelfFace/failLoadingSelfFace.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='identification'>
        <Route path='' element={<Identification />} />
        <Route path='type' element={<IdentificationChoose />} />
        <Route path='capture_documents' element={<CaptureDocuments />} />
        <Route path='loading_documents' element={<LoadingDocuments />} />
        <Route path='fail_loading_documents' element={<FailLoadingDocuments />} />
        <Route path='validate_self' element={<ValidateSelfFace />} />
        <Route path='capture_self' element={<CaptureSelfFace />} />
        <Route path='loading_self' element={<LoadingSelfFace />} />
        <Route path='fail_loading_self' element={<FailLoadingSelfFace />} />
        <Route path='success' element={<Success />} />
      </Route>

    </Routes>
  </BrowserRouter>
)
