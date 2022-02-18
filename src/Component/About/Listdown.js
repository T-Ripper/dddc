import React from 'react';
import "../../Styles/Listdown.Styles.css";



import { Link } from 'react-router-dom';


const ListDown = ({ dropdown, setDropdown}) => {
            
   
    return (

        <ul className= {dropdown ? "Dropdown " : "set" }
        onMouseLeave= {()=> setDropdown(!setDropdown
        )}
       
        >
           <li className= "">
           
           <Link to="/History" >Our History</Link></li>
           
           
        <li className="">
        <Link to="/MissionAndVision" >Mission And Vision</Link></li>
        <li className="">
        <Link to="/OurBelifs" >Our Belifs</Link></li>
        <li className="">
        <Link to="/OurUniqueness" >Our Uniqueness</Link></li>

</ul>
           
    )
}



export default ListDown;