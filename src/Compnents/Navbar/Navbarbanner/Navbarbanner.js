import React from 'react';
import './Navbarbanner.css' ;

import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link} from 'react-router-dom';
const Navbarbanner = () => {
  const options  = [ 
  
    { "name": "MX player"},
    { "name": "Sell"},
    { "name": "Amazon Pay"},
    { "name": "Gift Cards"},
    { "name": "AmazonBasics"},
    { "name": "Buy Again"},
    { "name": "Gift Ideas"},
    { "name": "Books"},
    { "name": "Home Improvement"},
    { "name": "Today's Deals"},
    { "name": "Customer Service"},
    { "name": "Browsing History"},
    
  
    
  
  ]
  return (
    <div className = "navbarBanner">
      <div className = "navbarBannerOptionsLeft">
        <div className = "OptionsNavbarBanner">
          <MenuIcon sx = {{fontsize: "24px"}}/>
          <div className = "alloptionsNavbarBanner">All</div>
        </div>
        { options.map((item,ind)=> {
          return (
            <Link  to ={ '/products'} className = "optionsNavbarBanner" key = {ind}>
              <div className = "allOptionsNavbarBanner">{item.name}</div>
              </Link>
          );
        })
        }
       

        
      </div>
        
  
     
    </div>
  )
}

export default Navbarbanner
