import React, { useState, useEffect } from 'react';
// import logo from '../images/SMH-full-logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { setProfileView } from '../actions/index';



const Navbar = (props) => {

  const dispatch = useDispatch();
  // Calling the function on component mount
  useEffect(() => {

  }, []);

  function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    console.log('close button clicked')
  }

  return (
    <div id={'mySideNav'}>
      <div className="n" id={'mySideNav'}>
        <div>
          <img
            // src={logo}
            alt="SHN Company Logo"
          />
        </div>
        <div className='app-center nav-links'>
          <a className="closebtn" onClick={() => closeNav()}>CLOSE</a>
          <a href="#" onClick={() => dispatch(setProfileView(0))}>Add Candidate</a>
          <a href="#" onClick={() => dispatch(setProfileView(1))}>Update Candidate</a>
          <a href="#" onClick={() => dispatch(setProfileView(2))}>Add Occupation</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// const Navbar = (props) => {

//   const dispatch = useDispatch();
//   // Calling the function on component mount
//   useEffect(() => {

//   }, []);

//   function openNav() {
//     document.getElementById("mySideNav").style.width = "250px";
//     document.getElementById("body").style.marginLeft = "250px";
//   }

//   function closeNav() {
//     document.getElementById("mySideNav").style.width = "0";
//     document.getElementById("body").style.marginLeft = "0";
//     console.log('close button clicked')
//   }

//   return (

//     <nav class="navbar navbar-light bg-light">
//       <div class="n">
//         <span class="navbar-brand mb-0 h1">
//           <img
//             src={logo}
//             alt="SHN Company Logo"
//           />
//         </span>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse app-center nav-links" id="navbarNav">
//           <ul class="navbar-nav">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">Features</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">Pricing</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;