import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { usePlatformStore } from './stores/platformStore'
import Landing from './pages/Landing'
import DegenTerminal from './pages/DegenTerminal'
import VentureVault from './pages/VentureVault'
import Partners from './pages/Partners'

function App() {
  const { mode } = usePlatformStore()

  useEffect(() => {
    const body = document.body
    if (mode === 'vault') {
      body.classList.add('vault-mode')
    } else {
      body.classList.remove('vault-mode')
    }
  }, [mode])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dex/*" element={<DegenTerminal />} />
        <Route path="/vc/*" element={<VentureVault />} />
        <Route path="/vc/partners" element={<Partners />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
