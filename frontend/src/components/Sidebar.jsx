import React from 'react'
import { FaHome } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiWorld } from "react-icons/gi";
import { IoMdMan } from "react-icons/io";
import { SiZcash } from "react-icons/si";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white position-fixed bg-dark " style={{ width: "250px", height: "524px", top: '0', left: '0', margin: '0' }}>
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

          <span class="fs-4">WorldDatabase</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">

              <FaHome className='me-3' />  Home
            </a>
          </li>
          {/* <li>
            <Link to='/' class="nav-link text-white">

              <LuLayoutDashboard className='me-3' />   Dashboard
            </Link>
          </li> */}
          <li>
            <Link to="/countries" class="nav-link text-white">

              <GiWorld className='me-3' />  Country
            </Link>
          </li>

          <li>
            <Link to="/language" class="nav-link text-white">

              <GiWorld className='me-3' />  language
            </Link>
          </li>


          <li>
            <Link to="/LifeExpectancy" class="nav-link text-white">

              <GiWorld className='me-3' />LifeExpectancy  
            </Link>
          </li>


          <li>
            <Link to="/city" class="nav-link text-white">

              <GiWorld className='me-3' />  City
            </Link>
          </li>
          <li>
            <Link to="/population" class="nav-link text-white">

              <IoMdMan className='me-3' />    Population
            </Link>
          </li>
          <li>
            <Link to="/economy" class="nav-link text-white">

              <SiZcash className='me-3' />    Dashboard
            </Link>
          </li>
        </ul>
        <hr />

      </div>
    </>
  )
}

export default Sidebar
