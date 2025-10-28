import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavContainer from './components/navigators/navContainer'
import NavElContainer from './components/navigators/navElementsContainer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavContainer>
      <NavElContainer>
        
      </NavElContainer>
    </NavContainer>
  </StrictMode>,
)
