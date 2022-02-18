import React from "react";
import Address from "./Address"
import Country from "./Country";
import "../../Styles/ContactUs.css"



const ContactUs = () => {

    return (
        <div className= "Container">
                <div className= "Address">
        <Address /> 
      
    <form className= "text">
    <label>
      Name:
      <input type="text" name="name" />
    </label> <br/> <br/>
    <label>
      E-mail Address:
      <input type="email address" name="email address" />
    </label> <br/> <br/>
    <label>
      Phone-Number:
      <input type="number" name="Number" />
    </label> <br/> 

    <br/>

    <Country /> <br/>

    <label>
      Subject:
      <input type="text" name="Subject" />
    </label> <br/> <br/>
     <label>Your message  </label> <br/>
    <textarea rows= "6"  cols= "60" name= "comment" />
   
    <br/>
    <button type="submit" value="submit">Submit</button>

   

    
  </form>
  </div>

  </div>
    )
}

export default ContactUs