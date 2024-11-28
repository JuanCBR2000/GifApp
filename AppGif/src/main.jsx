import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppGif } from './AppGif'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppGif></AppGif>
  </StrictMode>,
)
