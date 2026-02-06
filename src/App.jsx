import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Employee from './pages/Employee'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

const App = () => {

  const [employees, setEmployees] = useState(()=>{
    const storedEmp = localStorage.getItem('employees')
    return storedEmp ? JSON.parse(storedEmp) : []
  })

  // 🔹 load from localStorage ONCE
  // useEffect(() => {
  //   const storedEmp = JSON.parse(localStorage.getItem('employees'))
  //   if (storedEmp) {
  //     setEmployees(storedEmp)
  //   }
  // }, [])



    const [showPopUp, setShowPopUp] =useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null)



  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* 🔥 THIS LINE WAS MISSING */}
        <Route 
            path="/" 
                element={<Dashboard 
                                  employees={employees} 
                                  setEmployees={setEmployees} 
                                  showPopUp={showPopUp} 
                                  setShowPopUp={setShowPopUp} 
                                  editingEmployee={editingEmployee} 
                                  setEditingEmployee={setEditingEmployee}/>} />

        <Route
          path="/employee"
          element={<Employee employees={employees} setEmployees={setEmployees}  />}
        />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
