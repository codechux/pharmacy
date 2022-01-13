import React from 'react'
import './css/cards.css'
import * as GiIcon from 'react-icons/gi'
import * as FaIcon from 'react-icons/fa'

const Cards = () => {
    return (
        <div className='cards'>
            <div className="quality">
                <h1>Quality Health at Last!</h1>
                <p>Health is wealth. Live longer and healthier when you trust OneHealth for total wellness</p>
            </div>

            <div className="cards-details">
                <div className="card">
                <GiIcon.GiMedicines />
                <h4>Buy Medicine</h4>
                <p>Get NAFDAC-approved medications delivered to you.</p>
                <button>Enter pharmacy</button>
                </div>
                
                <div className="card">
                <FaIcon.FaUserNurse />
                <h4>Consult a Doctor</h4>
                <p>Skip the struggle of booking appointments..</p>
                <button>Consult Doctor</button>
                </div>
                
                <div className="card">
                <GiIcon.GiTestTubes />
                <h4>Book Lab Test</h4>
                <p>Sample collections are done by trained Phlebotomists.</p>
                <button>Book Lab Test</button>
                </div>

                <div className="card">
                <FaIcon.FaCartPlus />
                <h4>Product Recommendation</h4>
                <p>Get the right products and medications just for you.</p>

                <div className='card-btn'>
                <button>Sexual Health</button>
                <button>Multivitamins</button>
                </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Cards
