import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Partnership from './pages/Partnership'
import Training from './pages/Training'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Booking from './component/Booking'
import Blog from './pages/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/services' element={<Services/>} />
        <Route index path='/contact' element={<Contact/>} />
        <Route index path='/partnership' element={<Partnership/>} />
        <Route index path='/training' element={<Training/>} />
        <Route index path='/booking' element={<Booking/>} />
        <Route index path='/blog' element={<Blog/>} />
      </Routes>
      <Footer/>
    </div>

  )
}

export default App
