import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import './css/home.css'
import Cards from '../components/Cards'
import Category from '../components/Category'
import Shop from '../components/Shop'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Banner />
           <Breadcrumbs />
           <Cards />
           <Category />
           <Shop />
        </div>
    )
}

export default Home
