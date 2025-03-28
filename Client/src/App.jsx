import React, { useState } from 'react'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About';


function App() {

  return (
  
    <Router>
      <Routes>
        {/* <Route path='/about' element={>}/> */}
        <Route path='/' element={<Landing/>}/>
      </Routes>
    
      </Router>
  )
}

export default App;
