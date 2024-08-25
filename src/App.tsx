import React, { Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import MapComponent from './pages/Map'
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Navbar = React.lazy(() => import('./components/Navbar'))

const Contact = React.lazy(() => import('./pages/Contact'))
const BackToTop = React.lazy(() => import('./components/BackToTop'))

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/:slug" element={
            <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
            </Suspense>
            } />
          <Route path="/" element={
            <Suspense fallback={<div>Loading...</div>}>
            <Portfolio />
            </Suspense>
            } />
          <Route path="/map" element={
            <Suspense fallback={<div>Loading...</div>}>
            <MapComponent />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<div>Loading...</div>}>
            <Contact />
            </Suspense>
          } />
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
        <BackToTop />
      </main>
    </>
  )
}

export default App
