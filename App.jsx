import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Business from './pages/Business'
import Admin from './pages/Admin'
import ThankYou from './pages/ThankYou'

export default function App(){
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='max-w-6xl mx-auto px-4 py-8'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/business/:id' element={<Business />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/thankyou' element={<ThankYou />} />
        </Routes>
      </main>
    </div>
  )
}
