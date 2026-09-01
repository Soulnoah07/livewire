import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Contact.css'
import './Home.css'
import './Projects.css'
import './Service.css'
import './Skills.css'
import './Footer.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
