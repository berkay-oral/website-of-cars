import React, { Component } from 'react'
import './Home.css';
export class Home extends Component {
    render() {
        return (
            <section className="home-section my-4 py-4">
                <div className="jumbotron text-center ">
                    <div className="container ">
                 
                               <h1 className="jumbotron-heading">En Yeni Araçları Satın Alın</h1>
                               <p className="text-muted">Erkenden istediğiniz aracı uygun fiyata alın</p>
                 
                                <p className="buttons">
                                <a href="#" class="btn btn-secondary my-3">BUTTON1</a>
                                <a href="#" class="btn btn-primary my-3">BUTTON2</a>
                                </p>
                                                    
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;
