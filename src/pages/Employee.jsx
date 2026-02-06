import React, { useEffect, useState } from 'react'

const Employee = ({ employees, setEmployees, closePopUp, editingEmployee}) => {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [mail, setMail] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('On Hold')

  useEffect(()=>{
    if(editingEmployee){
      setName(editingEmployee.name)
      setMail(editingEmployee.mail)
      setNumber(editingEmployee.number)
      setRole(editingEmployee.role)
      setStatus(editingEmployee.status)
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()


      if(editingEmployee) {
        const updateEmployee = employees.map(emp=> 
          emp.id === editingEmployee.id ?
          {...emp , name, mail, number, role, status} : emp
        )
        setEmployees(updateEmployee)
        
      }
      else{
          const newEmployee = {
      id: Date.now(),
      name,
      number,
      mail,
      status,
      role
    }
     setEmployees([...employees, newEmployee])
      }

    closePopUp() 
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

   
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <input
        type="tel"
        placeholder="Mobile"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={e => setMail(e.target.value)}
        required
      />

        <select className='select'
          value={role} 
          onChange={(e)=>setRole(e.target.value)}
          required
          >

          <option value=''> --Select Role-- </option>
          <option value='Frontend Developer'> Frontend Developer </option>
          <option value='Backend Developer'> Backend Developer </option>
          <option value='Full Stack Developer'> Full Stack Developer </option>
          <option value='Junior Java Developer'> Junior Java Developer </option>
          <option value='Technical Support'> Technical Support </option>
          <option value='Software Developer'> Software Developer </option>
          <option value='Python Developer'> Python Developer </option>
        </select>

       <select className='select'
          value={status}
          onChange={(e)=>setStatus(e.target.value)}
          required
          >
              <option value=''> -- Select Status -- </option>
              <option value='Selected'>Selected </option>
              <option value='On Hold'> On Hold </option>

       </select>

     <div className='buttons'>
       <button type="submit">Submit</button>
      <button type="button" onClick={closePopUp}>Cancel</button>
     </div>
    </form>
  )
}

export default Employee
