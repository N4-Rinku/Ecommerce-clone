import React from 'react';
import './Navbarbelt.css';
import amazonlogo from '../../../images/amazonlogo.png';
import amazonfont from '../../../images/amazonfont.webp';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import flag from '../../../images/flag.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';



const Navbarbelt = () => {
  const cartItems = useSelector((state)  => state.cart.items);
  return (
    <div className = "navbarbelt">
        <div className = "navbarbeltleft">
            <Link className = "navbarbeltleftlogo"> 
            <img className = 'amazonfont'  src = {amazonfont} alt  = 'amazonfont' />
            <span className = 'navbar_inlogo'>.in</span> 
            </Link>
          
           
             <div className = "location">
              <div className = "navbarlocationimg"> 
                <PlaceIcon className  ="navbarlocation " sx = {{fontsize: "22px"}} / >
              </div>
             </div>
             <div className  = "currentlocation">
              Delivery to Rinku
              <br/>

              <div className = "pincode">Palwal 121102</div>
               </ div>
               
              
             </ div>
        <div className =  "navbarBeltSearchBox">
          <div className='navbarBeltSearchDiv'>
            <div className = "navbarBeltSearchBoxAll">
              <div className = "navbarBeltSearchBoxAllText">All</div>
              <ArrowDropDownIcon sx = {{fontsize:"5px"}}/>
          </div>
          <input type = "text" className = "navbarBeltInputSearchBox" placeholder  = "Search Amazon.in"/>
          <div className = "searchIconNavbarBelt">
            <SearchIcon sx = {{fontsize:"12px"}} className = "searchIconNavbarBeltIcon"/>
          </div>
          </div>
          
        </div>
        

        <div className = "navbarbeltright">
         <div className = "flag">
           <img src = {flag} className = "indianflag"/>
           <div className = "indiacodeNavbarbelt">EN < ArrowDropDownIcon sx = {{ fontsize:16,marginTop:1,marginLeft:-0.4}} className = "indiacodeNavbarBeltdrp"/></div>
         </div>
        </div>
          
         <div className = "signin">
          <div className = "hellonavbar "> Hello, Users </div>
            
            <div className = "account"> Accounts & Lists <ArrowDropDownIcon sx = {{ fontsize:16,marginTop:1,marginLeft:-0.4}} className = "indiacodeNavbarBeltdrp"/> </div>
            
         
         </div>

         <div className = "returns">
            <div className = "returnsnavbar"> Returns  </div>
            <div className = "orders">& Orders</div>
         </div>
         <Link to  = { '/cart'} className = "cart">
          <span className = 'cartItemNumberNavbarBelt'>{cartItems.length}</span>
          <div className = "cartnavbar"> <ShoppingCartIcon /> <span className = "carttitle">Cart</span></div>
          </Link>
    
     </div>
               
  
      
    
  )
}

export default Navbarbelt

