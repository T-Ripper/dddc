import React, { Component } from 'react';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpeg';
import "../Homepage/Gallery.css"


class Gallery extends Component {   


    state = {
        index: 0, 
        picList: [image1, image2, image3, image4, image5]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div className= "Contain">
            <button style={{"fontSize":"18px", height: "50px"}} onClick={this.onClickPrevious}> Previous </button>
            <img src={this.state.picList[this.state.index]} alt= "images" style={{"maxWidth":"80%", maxHeight: "500px", display: 'block' , margin: "0 auto"}} /> <br/>
            <button style={{"margin-left":"5px", "fontSize":"18px", height: "50px"}} onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}


export default Gallery;