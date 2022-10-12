import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Nav from './component/Nav'
import Footer from './component/Footer'
import Partnership from './pages/Partnership'
import Training from './pages/Training'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
        <Route index path='/' element={<Home/>} />
        {/* <Route index path='/services' element={<Services/>} /> */}
        <Route index path='/contact' element={<Contact/>} />
        <Route index path='/partnership' element={<Partnership/>} />
        <Route index path='/training' element={<Training/>} />
      </Routes>
      <Footer/>
    </>

  )
}

export default App
