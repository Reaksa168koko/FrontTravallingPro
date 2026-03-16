import React from 'react'
import Banner from './components/Banner'
import CardComponents from './components/CardComponents'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Fearture/Auth/Login'
import Trip from './Page/Trip'
import Guide from './Page/Guide'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          
        <Routes>
          <Route path='/' element={
            <dev>
              <Banner />
              <CardComponents />
            </dev>} />
            <Route path='/tripe' element={<Trip/>}/>
            <Route path='/guide' element={<Guide/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
