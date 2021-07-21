import React, { Component } from 'react'
import './Navbar.css';

import { BrowserRouter as Router,  Link, Route, Switch} from  "react-router-dom";

import './Navbar.css';
import Home from '../Home/Home';
import CarInform from '../CarInform/CarInform';
import { MenuItems } from './MenuItems';//li  ye gönderdik

class Navbar extends Component {

   state = { clicked : false }

   handleClick = () => {
       this.setState({ clicked : !this.state.clicked})//her tıkladığında zıttı değer olacak
   }

    render() {
        return (
     
     <Router>
             <nav className="navbarItems sticky-top">



                     {/*NAVBAR LOGO*/}
                     <h1 className="navbar-logo">ARABALAR <i className="fa fa-car"></i></h1>
                     
                     {/*NAVBAR ICONS (hamburger-menu - cancel menu) */}
                     <div className="menu-icon" onClick={this.handleClick} >
                        <i  className={this.state.clicked ?'fa fa-times' :'fa fa-bars'}></i>
                     </div>
         
                    {/*NAVBAR MENULER (MenuItems.js ten alıyoruz*/}
                               <div>
                                     {/*                    açılan menu       normal menu  */}
                                     <ul onClick={this.handleClick} className={this.state.clicked ?'nav-menu active' :'nav-menu' }>
                                        
                                        {MenuItems.map((menuItem) =>{
                                            const {id, title, url, cName} = menuItem;
                                            return(
                                                    <li key={id}>
                                                    <Link className={cName} to={url}> {title} </Link>
                                                    </li>
                                               

                                                    
                                                    )                        
                                                  })}
                                        </ul>
                               </div>
             </nav>

                             <Switch> {/* sayfa  açılırken /  */}
                               <Route path="/"  exact component={Home}/>
                               <Route path="/CarInform" component={CarInform}/>
                            </Switch>

     </Router>

        )
    }
}



export default Navbar;

