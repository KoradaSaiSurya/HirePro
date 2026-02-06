// import React, { useState } from "react";
// import Employee from "./Employee";

// const Dashboard = ({
//   employees,
//   setEmployees,
//   showPopUp,
//   setShowPopUp,
//   editingEmployee,
//   setEditingEmployee,
// }) => {
//   const [searchEmp, setSearchEmp] = useState("");

//   const selectedEmployee = employees.filter(e => e.status === "Selected").length;
//   const onHoldEmployee = employees.filter(e => e.status === "On Hold").length;
//   const totalEmployee = employees.length;

//   const filteredEmp = employees.filter(emp =>
//     emp.name.toLowerCase().includes(searchEmp.toLowerCase()) ||
//     emp.mail.toLowerCase().includes(searchEmp.toLowerCase()) ||
//     emp.role.toLowerCase().includes(searchEmp.toLowerCase()) ||
//     emp.status.toLowerCase().includes(searchEmp.toLowerCase())
//   );

//   const handleDelete = id => {
//     setEmployees(employees.filter(emp => emp.id !== id));
//   };

//   return (
//     <div className="p-4 sm:p-6 bg-slate-100 max-h-screen">

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">

//         {/* LEFT STATS */}
//         <div className="bg-white rounded-2xl p-4 shadow grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-1 gap-4">
//           <div className=" h-20 lg:h-40 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center items-center">
           

//             <p className="text-xs tracking-widest">SELECTED</p>
//             <p className="text-2xl lg:text-3xl font-bold">{selectedEmployee}</p>


//           </div>

//           <div className="h-20 lg:h-40 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 text-white flex flex-col justify-center items-center">
            
            
//             <p className="text-xs tracking-widest">ON HOLD</p>
//             <p className="text-2xl lg:text-3xl font-bold">{onHoldEmployee}</p>


//           </div>

//           <div className="h-20 lg:h-40 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex flex-col justify-center items-center">
            
            
//             <p className="text-xs tracking-widest">TOTAL</p>
//             <p className="text-2xl lg:text-3xl font-bold">{totalEmployee}</p>


//           </div>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="bg-white rounded-2xl p-4 sm:p-5 shadow flex flex-col ">

//           {/* SEARCH + ADD */}
//           <div className="flex sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">

            
//             <input
//               type="search"
//               value={searchEmp}
//               onChange={e => setSearchEmp(e.target.value)}
//               placeholder="Search employee..."
//               className="w-full sm:w-[420px] px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
//             />

//             <button
//               onClick={() => {
//                 setEditingEmployee(null);
//                 setShowPopUp(true);
//               }}
//               className="w-full sm:w-auto px-5 py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
//             >
//               Add Employee
//             </button>
//           </div>

//           {/* TABLE */}
//           <div className="overflow-x-auto overflow-y-auto max-h-[60vh] border rounded-xl">
//             <table className="w-full text-sm min-w-[900px]">
//               <thead className="sticky top-0 bg-neutral-800 text-white">
//                 <tr>
//                   <th className="p-3">S.NO</th>
//                   <th>Name</th>
//                   <th>Mail</th>
//                   <th>Number</th>
//                   <th>Status</th>
//                   <th>Role</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredEmp.length ? (
//                   filteredEmp.map((emp, i) => (
//                     <tr
//                       key={emp.id}
//                       className="text-center even:bg-slate-100 hover:bg-indigo-50"
//                     >
//                       <td className="p-3">{i + 1}</td>
//                       <td>{emp.name}</td>
//                       <td>{emp.mail}</td>
//                       <td>{emp.number}</td>
//                       <td>
//                         <span
//                           className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
//                             emp.status === "Selected"
//                               ? "bg-gradient-to-r from-indigo-500 to-purple-600"
//                               : "bg-gradient-to-r from-pink-400 to-rose-500"
//                           }`}
//                         >
//                           {emp.status}
//                         </span>
//                       </td>
//                       <td>{emp.role}</td>
//                       <td className="flex justify-center gap-3 py-2">
//                         <button onClick={() => handleDelete(emp.id)}>🗑️</button>
//                         <button
//                           onClick={() => {
//                             setEditingEmployee(emp);
//                             setShowPopUp(true);
//                           }}
//                         >
//                           ✏️
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" className="p-6 text-gray-500">
//                       No employees found...
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* POPUP */}
//       {showPopUp && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <Employee
//             employees={employees}
//             setEmployees={setEmployees}
//             editingEmployee={editingEmployee}
//             closePopUp={() => {
//               setShowPopUp(false);
//               setEditingEmployee(null);
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;









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