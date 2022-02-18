import React from 'react';
import  "./Slides.styles.css"
import Gallery from './Gallery';
// import image3 from "../../assets/image3.jpeg"
// import image2 from "../../assets/image2.jpeg"
// import art from "../../assets/art.jpeg"


class Slider extends React.Component {
   
   

   render () {
    return ( <div>
        <Gallery />
    
    {/* <div className= "container" style = {{backgroudImage: {art} , 
    backgroudSize : "cover", width : "100%" }}>
         <div className= "protector" >
        
            <img  className = "go-left" src= {image3 } alt= "first " />
         
            <img className= "go-right" src= {image2} alt= "second " />
        </div>
            <div className= "text">
         <h1>DIVINE DOMINION DELIVERANCE CHURCH</h1>
         <p>Woli ATUMOALA Worldwide <br/>
         Psalm 114 </p>
         </div>
    </div> */}
      </div>
    )
   }
}


export default Slider;