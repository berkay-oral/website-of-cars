import React, { Component } from 'react'
 

// import audiImg from '../BrandDatas/audiImages/audi-q2.webp'

import {audiData} from '../BrandDatas/AudiDatas';
import CarTypeButton from '../CarTypeButton/CarTypeButton';
import './BrandsStyle.css';

export class Audi extends Component {
     constructor(props){
         super(props);
         this.state = { 
                          audiDatas : audiData,
                          audiTypes : audiData
                      }
     }

     typeOfCar = (car_type) => {
       const newType = this.state.audiTypes.filter((audiType) => audiType.type === car_type);
       return this.setState({audiDatas : newType})
     }

      allOfCars = (car_type) => {
          const allType = this.state.audiTypes.filter((audiType) => audiType  !== car_type);
          return this.setState({ audiDatas : allType })
      }

     render(){
         return(
               <div className="row">
                   <CarTypeButton typeOfCar={this.typeOfCar} allOfCars={this.allOfCars}/>
                    {this.state.audiDatas.map(audidata => {
                        const {id, brand, type, img, price} = audidata;
                        return(
                                <div className="col-md-6 col-xl-4 my-4" key={id}>
                                    <div className="card text-center shadow-sm">
                                       <div className="card-img-top mx-auto">
                                  
                                         <img  src={img}   className="img-fluid" alt="car-image"/>
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

export default Audi;
