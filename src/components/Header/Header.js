import React, { useState, useEffect } from 'react'
import '../Header/Header.css';

import {headerCarsData} from '../Header/HeaderSliderData';

const moveX = [0, -33.33, -66.66];

const Header = () =>  {

    const  [headerImages, setheaderImages] = useState( headerCarsData )
    const  [translatex, settranslatex] = useState(moveX);
    const  [index, setindex] = useState(0);


    const  [animation, setanimation] = useState( true )

 
    // let myAnimation = null;



    let timer = null;
     useEffect(() => {
      
        timer = setInterval(() => (index < translatex.length -1 ?setindex(index + 1) :setindex(0)),3000);
        

             setTimeout(() => {
                clearInterval(timer);
            }, 3000)



 })

        return (
            
            <header>
             
                  <div className="container-fluid slider vh-100 ">
                     
                      <div className="slides" style={{transform:`translateX(${ translatex[index]}%)`}}>
                         {headerImages.map(carImage =>{
                             const {id, image, topDescription, bottomDescription } = carImage;
                       
                             return( 
                                       <div className={ ` slide text-center ${image} `}  key={id}>
                                             
                                             <div className="overlay">
                                             <div className="textArea my-auto" >                                              
                                                    <h2 className="topText" >{topDescription}</h2>
                                                    <h2 className="bottomText" >{bottomDescription}</h2>
                                                </div>
                                            </div>
                                       </div>
                             )
                      
                      })}
                      </div>
                  
                </div>

            </header>
        )

}

export default Header;
