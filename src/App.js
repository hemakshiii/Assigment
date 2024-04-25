import React from 'react'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>

      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={< Profile/>}></Route>
      </Routes>
    </Router>
    
   
  )
}

export default App
