import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import SimpleLineChart from './charts/SimpleLineChart'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SimpleLineChart/> */}
    <App />
  </StrictMode>,
)
