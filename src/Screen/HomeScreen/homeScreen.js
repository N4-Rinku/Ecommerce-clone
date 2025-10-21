import React from 'react';
import './homeScreen.css'
import HomeBanner from './HomeBanner/homeBanner'
import HomeDetails from './HomeDetails/homeDetails'
import Footer from '../../Compnents/Footer/footer'


const HomeScreen = () => {
  return (
    <div className = "homeScreen"> 
       <HomeBanner/>
       <HomeDetails/>
       
    </div>
  )
}

export default HomeScreen
