import React, { Component } from 'react'
 
import {opelData} from '../BrandDatas/OpelData';
import CarTypeButton from '../CarTypeButton/CarTypeButton';
import './BrandsStyle.css';

class Opel extends Component {

     constructor(props){
         super(props);
         this.state = { 
                          opelDatas : opelData,
                          opelTypes : opelData
                      }
     }
 

     typeOfCar = (car_type) => {
       const newType = this.state.opelTypes.filter((opelType) => opelType.type === car_type);
       return this.setState({opelDatas : newType})
     }

 
      allOfCars = (car_type) => {
          const allType = this.state.opelTypes.filter((opelType) => opelType  !== car_type);
          return this.setState({ opelDatas : allType })
      }

     render(){
         return(
               <div className="row">
                   <CarTypeButton typeOfCar={this.typeOfCar} allOfCars={this.allOfCars}/>
                    {this.state.opelDatas.map(opeldata => {
                        const {id, brand, type, img, price} = opeldata;

                        return(
                                <div className="col-md-6 col-xl-4 my-4" key={id}>
                                    <div className="card text-center shadow-sm">
                                       <div className="card-img-top mx-auto">
                                  
                                         <img  src={img} className="img-fluid" alt="car-image"/>
                                      </div>
                                      <div className="card-body">
                                         <h4 className="card-title">{brand}</h4>
                                         <div className="card-text fiyatlar">
                                            <strong>{price[0]}</strong> ile <strong>{price[1]} TL</strong>
                                         </div>
                                      </div>
                                    </div>
                                </div>
                              )
                    
                    })}
               </div>
               )
     }




}

export default Opel;
