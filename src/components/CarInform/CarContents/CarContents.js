import React, { Component } from 'react'

import { BrowserRouter as Router,  Link, Route, Switch} from  "react-router-dom";





//import components
import Bmw from '../CarContents/Brands/Bmw';
 import Audi from '../CarContents/Brands/Audi';
 import Opel from '../CarContents/Brands/Opel';



class CarContents extends Component {
    render() {
        return (
            <div className="col-md-10  p-2 bg-white carsArea" > 
                       
            

                   
                              
                            <Switch>
                                     {/* exact  ilk  görünen sayfa */} {/* CarBar li leri tıkladığında yönlendir */}
                                <Route path="/" exact component={Bmw} />
                                <Route path="/Opel" component={Opel} /> 
                                <Route path="/Audi" component={Audi} /> 

                            </Switch>  
                          
                 

            </div>
        )
    }
}

export default CarContents;
