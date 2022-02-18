import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../Styles/header.styles.css";
import dddc from "../assets/dddc.png";
import ListDown from "../Component/About/Listdown";


const Header = (props) => {
       const [ click, setClick] = useState(false);
       const [dropdown, setDropdown] = useState(false)
       const handleClick = () => setClick(!click);
       const closeMobileMenu = () => setClick(false);
    
    return (
         
        <div className= "header">
            <div className="nav-bar" >
                <img src= {dddc} className= "logo" alt= "logo"/>
            </div>
            
            
            <ul className= {click ? "nav-options active" : "nav-options" }>
                <li className="option bar1" onClick={closeMobileMenu}>
                <Link to="/Home">Home</Link>
                        
                </li>
                <li className="option bar2" 
                onClick={closeMobileMenu}
                onMouseEnter= {() =>setDropdown(!dropdown)}
               >
                 
                    
                 About
                     </li>
                    
                     <ListDown dropdown={dropdown} setDropdown={setDropdown} />
                
                <li className="option bar3" onClick={closeMobileMenu}>
                <Link to="/Ministries">Ministries</Link>
                </li>
                <li className="option bar4" onClick={closeMobileMenu}>
                <Link to="/Give">Give</Link> 
                </li>
                <li className="option bar5" onClick={closeMobileMenu}>
                <Link to="/ContactUs">Contact Us</Link> 
                </li>
                <li className="option bar6" onClick={closeMobileMenu}>
                <Link to="/Give">Media resources</Link>  
                </li>
            </ul>
            <div className= "phone-menu"  onClick={handleClick}>
               {click ? (
                <i className= "big x icon"></i>
               ) : (
                   <i className= " big bars icon"></i>
               )}
                </div>
        </div>
      
    )
}

export default Header;