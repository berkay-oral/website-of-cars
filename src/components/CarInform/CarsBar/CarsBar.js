import React, { Component } from 'react'
import './CarsBar.css';
//react-router -> yönlendirici
import {Link} from  "react-router-dom";

class CarsBar extends Component {
             bgColor = (e) => {
                 if(e.currentTarget.id === "li1"){
                   document.getElementById("li1").style.backgroundColor = "#0b62e0";
                   document.getElementById("li2").style.backgroundColor = "";
                   document.getElementById("li3").style.backgroundColor = "";
                 }
                 else if(e.currentTarget.id === "li2"){
                    document.getElementById("li1").style.backgroundColor = "";
                    document.getElementById("li2").style.backgroundColor = "#0b62e0";
                    document.getElementById("li3").style.backgroundColor = "";
                 }
                 else{
                    document.getElementById("li1").style.backgroundColor = "";
                    document.getElementById("li2").style.backgroundColor = "";
                    document.getElementById("li3").style.backgroundColor = "#0b62e0";

                }
             }

             

           render(){
                               return (
                                      <div className="col-md-2  text-center carsArea"  >
                                        <nav>
                                            <ul>
                                            <Link  className="href"  to="/">
                                               <li id="li1" className="tag-a" onClick={this.bgColor}>BMW</li> 
                                            </Link>
                                            <Link   className="href"  to="/Opel"> 
                                               <li id="li2" className="tag-a" onClick={this.bgColor} >OPEL</li>
                                           </Link>
                                           <Link  className="href"   to="/Audi">
                                               <li id="li3" className="tag-a" onClick={this.bgColor}>AUDI</li>
                                           </Link>
                                        </ul>
                                    </nav>
                                </div>
                                        )
                                    }
                                }
export default CarsBar;