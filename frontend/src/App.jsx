import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'

const App = () => {
  return (
    <div className='text-blue-600'>
      <Routes>
      <Route path='/login' element= {<Login />} />
      </Routes>
    </div>
  )
}

export default App
