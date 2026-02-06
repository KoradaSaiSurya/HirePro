// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="bg-indigo-500 shadow-md sticky top-0 z-50">

//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-white tracking-wide">
//           HirePro
//         </h1>

//         {/* Links */}
//         <div className="flex gap-4 sm:gap-8 text-sm sm:text-lg font-medium">

//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `text-white hover:text-gray-200 transition ${
//                 isActive ? "underline underline-offset-4" : ""
//               }`
//             }
//           >
//             Dashboard
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `text-white hover:text-gray-200 transition ${
//                 isActive ? "underline underline-offset-4" : ""
//               }`
//             }
//           >
//             About
//           </NavLink>
//         </div>

//       </nav>
//     </header>
//   );
// };

// export default Navbar;











import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='navbar'>

        <div className="logo">
            <h1> HirePro </h1>
        </div>

        <div className='links'>
            <NavLink to='/' className='link'> Dashboard </NavLink>
            {/* <NavLink to='/employee' className='link'> Employee </NavLink> */}
            <NavLink to='/about' className='link' > About </NavLink>

        </div>
      
    </section>
  )
}

export default Navbar