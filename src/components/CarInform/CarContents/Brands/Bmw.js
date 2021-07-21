import React, { Component } from 'react'
 
import {bmwData} from '../BrandDatas/BmwData';
import CarTypeButton from '../CarTypeButton/CarTypeButton';
import './BrandsStyle.css';

export class Bmw extends Component {

     constructor(props){
         super(props);
         this.state = { 
                          bmwDatas : bmwData,
                          bmwTypes : bmwData
                      }
     }

     typeOfCar = (car_type) => {
       const newType = this.state.bmwTypes.filter((bmwType) => bmwType.type === car_type);
       return this.setState({bmwDatas : newType})
     }

 
      allOfCars = (car_type) => {
          const allType = this.state.bmwTypes.filter((bmwType) => bmwType  !== car_type);
          return this.setState({ bmwDatas : allType })
      }

     render(){
         return(
               <div className="row">
                   <CarTypeButton typeOfCar={this.typeOfCar} allOfCars={this.allOfCars}/>
                    {this.state.bmwDatas.map(bmwdata => {
                        const {id, brand, type, img, price} = bmwdata;

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

export default Bmw;
