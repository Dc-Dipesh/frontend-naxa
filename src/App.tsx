import React from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Navbar = React.lazy(() => import('./components/Navbar'))
const Map = React.lazy(() => import('./pages/Map'))
const Contact = React.lazy(() => import('./pages/Contact'))
const BackToTop = React.lazy(() => import('./components/BackToTop'))

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/:slug" element={<Portfolio />} />
          <Route path="/" element={<Portfolio />} />
          <Route path="/map" element={<Map />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
        <BackToTop />
      </main>
    </>
  )
}

export default App
