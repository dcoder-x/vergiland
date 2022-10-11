import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Nav from './component/Nav'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
        <Route index path='/' element={<Home/>} />
        {/* <Route index path='/about' element={<About/>} />
        <Route index path='/services' element={<Services/>} />
        <Route index path='/contact' element={<Contact/>} />
        <Route index path='/Projects' element={<Projects/>} /> */}
      </Routes>
      <Footer/>
    </>

  )
}

export default App
