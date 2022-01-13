import React from 'react'
import './css/breadcrumbs.css'
import hero from '../assets/hero-right.webp'
import nafdac from '../assets/nafdac-logo.png'
import ag from '../assets/ag-logo.png'
import * as IoIcon from 'react-icons/io5'

const Breadcrumbs = () => {
    return (
        <div className='bread-crumbs'>
            <div className="details">
                <h1>
                Quality Medicines & Healthcare at your Doorstep.
                </h1>
                <div className="benefits">
                    <ul>
                        <li><IoIcon.IoTimeOutline />Save Time</li>
                        <li>Live Healthy</li>
                        <li>Be Happy</li>
                    </ul>
                </div>
                <div className="consult">
                    <button>Buy your medication</button>
                    <button>Consult your Doctor</button>
                </div>

                <div className="certify">
                    <img src={nafdac} alt="" />
                    <img src={ag} alt="" />

                    <div className="note">
                        <p>This page was medically reviewed and vetted by
                            highly trained Pharmacists, Doctors, and relevant
                            healthcare bodies.</p>
                    </div>
                </div>
            </div>
            
            <div className="hero">
                <img src={hero} alt="Hero" />
            </div>
        </div>
    )
}

export default Breadcrumbs
