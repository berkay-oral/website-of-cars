import React, { Component } from 'react'

import { BrowserRouter as Router } from "react-router-dom";

import CarsBar from './CarsBar/CarsBar';
import CarContents from './CarContents/CarContents';

export class CarInform extends Component {
    render() {
        return (
            <section id="cars-section">
                   <div className="container-fluid">
                       <div className="row ">
                           <Router>
                               <CarsBar/>                  
                               <CarContents/> 
                           </Router>
                       </div>
                   </div>
            </section>
        )
    }
}

export default CarInform;
