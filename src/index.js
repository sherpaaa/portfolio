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
    <Routes>
      <Route path={homeUrl + '/'} element={<Home />} />
      <Route path={homeUrl + '/home'} element={<Home />} />
      <Route path={homeUrl + '/resume'} element={<Resume />} />
      <Route path={homeUrl + '/projects'} element={<Projects />} />
      <Route path={homeUrl + '/contact'} element={<Contact />} />
      <Route path={homeUrl + '*'} element={<Error404 />} />
    </Routes>
    {/* <Routes>
      <Route path={homeUrl + '/'} element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes> */}
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
