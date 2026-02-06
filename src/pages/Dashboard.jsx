import React, { useState } from 'react'
import Employee from './Employee'

const Dashboard = ({employees, setEmployees, showPopUp, setShowPopUp , editingEmployee , setEditingEmployee}) => {


  const [searchEmp, setSearchEmp] =useState('')


  const selectedEmployee = employees.filter(emp => emp.status === 'Selected').length
  const onHoldEmployee = employees.filter(emp => emp.status === 'On Hold').length
  const totalEmployee = employees.length;


  const filteredEmp= employees.filter(emp=>
    emp.name.toLowerCase().includes(searchEmp.toLowerCase())||
    emp.mail.toLowerCase().includes(searchEmp.toLowerCase())||
    emp.role.toLowerCase().includes(searchEmp.toLowerCase())||
    emp.status.toLowerCase().includes(searchEmp.toLowerCase())

  )


  const handleDelete=(id)=>{

    // const deleteAlert= window.confirm('Are u want to delete ?')
    // if(!deleteAlert) return

    const deleteEmp = employees.filter(emp=> emp.id !== id)
    setEmployees(deleteEmp);
  }
  


  return (
    <section className='container'>

        <section className='BothCards'> 

            <section className='cards'>

              <section className='boxes'>
                <section className='selected'> <h5>SELECTED </h5> {selectedEmployee}  </section>
                <section className='selected'> <h5> ON HOLD </h5>  {onHoldEmployee} </section>
                <section className='selected'> <h5> TOTAL EMPLOYEES </h5>  {totalEmployee} </section>
              </section>

            </section>

            <section className='StudentRecords'>

              <section className='search-addbtn'>

                <input className='search-input'
                  type='search'
                  value={searchEmp}
                  placeholder='Search Employee... name / role / mail / status'
                  onChange={(e)=> setSearchEmp(e.target.value)}
                />

              <button onClick={()=>{ 
                  setEditingEmployee(null) 
                  setShowPopUp(true)}} 
                  className='addBtn'
                  >
                   Add Employee 
              </button>

              </section>


                <section className='table-container'>

               
                 <table className='table'>
                  <thead >
                     
                    <tr >
                      <th> S.NO </th>
                      <th> NAME </th>
                      <th> MAIL </th>
                      <th> NUMBER </th>
                      <th> STATUS </th>
                      <th> ROLE / POSITION </th>
                      <th> ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredEmp.length > 0 ? (
                      filteredEmp.map((emp, index)=>(
                    <tr key={emp.id} >
                      <td> {index+1 } </td>
                      <td> {emp.name } </td>
                      <td> {emp.mail } </td>
                      <td> {emp.number } </td>
                      <td > 
                        <span className={`status ${emp.status === 'Selected' ? 'status-selected' : 'status-hold'}`} >     
                        {emp.status }            
                        </span>            
                      </td> 

                      <td> {emp.role } </td>

                      <td>
                        <button onClick={()=>handleDelete(emp.id)}> 🗑️ </button>

                        <button onClick={()=>{
                          setEditingEmployee(emp) 
                          setShowPopUp(true)}}> ✏️ </button>
                      </td>
                    </tr>              
                     ))
                    )
                    :
                    (
                      <tr>
                        <td colSpan="7" className="no-data">
                          No employees found...
                        </td>
                      </tr>
                                      )
                  }
                  </tbody>

                 </table>

                  </section>

              {showPopUp && (
                <div className="popup-overlay" >
                 <div className="popup" >

                       <Employee
                          setEmployees={setEmployees} 
                          employees={employees} 
                          closePopUp={()=>{
                            setShowPopUp(false) 
                            setEditingEmployee(null) 
                          }}
                          editingEmployee={editingEmployee}
                  />

                  </div>
                </div>
               
              )}
            </section>

        </section>

            
    </section>
  )
}

export default Dashboard
