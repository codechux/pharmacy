import React from 'react'
import './css/banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="health">
                <ul>
                    <li><a href="#">His Health</a></li>
                    <li><a href="#">Her Health</a></li>
                    <li><a href="#">Sexual Health</a></li>
                    <li><a href="#">Multivitamins</a></li>
                </ul>
            </div>

            <div className="upload">
                <span>Upload Presciption</span>
                <p>Health Calculators</p>
                <p>Blogs</p>
            </div>

        </div>
    )
}

export default Banner
