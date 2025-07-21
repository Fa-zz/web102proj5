import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout'
import ForecastDetailView from './routes/ForecastDetailView'
import RootView from './routes/RootView'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RootView />} />
          <Route path="/forecast/:location" element={<App />} />
          <Route path="/forecast/:location/:date" element={<ForecastDetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
