import React from 'react'
import logo from '../assets/new-logo.png';
import './css/Navbar.css'
import * as FaIcon from 'react-icons/fa'
import * as ImIcon from 'react-icons/im'
import * as IoIcon from 'react-icons/io'
import * as MdIcon from 'react-icons/md'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt=" logo" />
            </div>

            <div className="search-area">
                <input type="text" placeholder='Search for products,brands and categories ...' size="50"/>
                <FaIcon.FaSearch style={{color: 'green'}}/>
            </div>

            <div className="bundle">
                <ImIcon.ImFire style={{color:'gold'}}/>
                <p>Top Bundles</p>
                <IoIcon.IoIosCall style={{border: "1px solid #757575", borderRadius: "50%", fontSize: "16px"} }/>
            </div>

            <div className="enter">
                <FaIcon.FaCapsules style={{color: 'red'}}/>
                <p>Enter Pharmacy</p>
            </div>

            <div className="emergency">
                <MdIcon.MdLocalHospital style={{backgroundColor: 'red', color: "white"}}/>
                <p>Emergency</p>
            </div>
        </div>
    )
}

export default Navbar
