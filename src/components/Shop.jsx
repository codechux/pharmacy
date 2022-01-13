import React from 'react'
import './css/shop.css'
import his from '../assets/his-health.jpeg'
import her from '../assets/her-health.jpeg'
import sexual from '../assets/sex.jpeg'
import pills from '../assets/pills.jpeg'

const Shop = () => {
    return (
        <div className='shop'>
            <div className='pic'>
                <img src={his} alt="his-health" />
                <div className="title">His Health</div>
                <a className="link" href="#">Learn more</a>
            </div>
            <div className='pic'>
                <img src={her} alt="his-health" />
                <div className="title">Her Health</div>
                <a className="link" href="#">Learn more</a>
            </div>
            <div className='pic'>
                <img src={sexual} alt="his-health" />
                <div className="title">Sexual Health</div>
                <a className="link" href="#">Learn more</a>
            </div>
            <div className='pic'>
                <img src={pills} alt="his-health" />
                <div className="title">Medication</div>
                <a className="link" href="#">Learn more</a>
            </div>
        </div>
    )
}

export default Shop
