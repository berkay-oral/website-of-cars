import React, { Component } from 'react'
import'./CarTypeButton.css';
const  CarTypeButtons  = ({typeOfCar, allOfCars}) =>  {
   
 
        return (
            <div className="buttons-container  mt-3  text-start">
                  
                  <button  onClick={() => allOfCars("tümü")} className="btn btn-primary  border-0 rounded-0" >TÜMÜ</button>
                  <button  onClick={() => typeOfCar("sedan")} className="btn btn-primary  border-0 rounded-0" >SEDAN</button>
                  <button  onClick={() => typeOfCar("suv")} className="btn btn-primary  border-0 rounded-0" >SUV</button>
                  <button  onClick={() => typeOfCar("hatchback")} className="btn btn-primary  border-0 rounded-0">HATCHBACK</button>

            </div>
        )
   
}

export default CarTypeButtons

/** className="btn btn-primary m-2 " */