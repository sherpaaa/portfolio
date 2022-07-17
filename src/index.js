import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'sanitize.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import Resume from './routes/resume'
import Projects from './routes/projects'
import Contact from './routes/contact'
import { Error404 } from './routes/error404'
import ScrollToTop from './components/ScrollToTop'
import './styles.css'

const homeUrl = process.env.PUBLIC_URL

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/portfolio/" element={<Home />} />
      <Route path="/portfolio/home" element={<Home />} />
      <Route path="/portfolio/resume" element={<Resume />} />
      <Route path="/portfolio/projects" element={<Projects />} />
      <Route path="/portfolio/contact" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
