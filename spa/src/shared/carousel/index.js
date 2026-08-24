import {React, Fragment} from 'react'
import {Link} from 'react-router-dom'
import './carousel.css'

export const Carousel = ()  => {


    return (
        <Fragment>
            <div  id="carouselBox" className="container-fluid mt-5 mb-5">
                <h3 className="pt-3">Portifólio</h3>

                <div id="carouselBoxItem" className="carousel slide m-5" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <a href="./portifolio">
                                <img src="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/clonemusicdot.jpeg" className="d-block w-100" alt="Ilustração - clone da MusicDot"/>
                            </a>
                            
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <a href="./portifolio">
                                <img src="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/relogioanalogico.jpeg" className="d-block w-100" alt="Ilustração - Relógio Analógico"/>
                            </a>
                        </div>
                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselBoxItem" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselBoxItem" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next </span>
                    </button>
                </div>

                <ul>
                    <li>
                        <Link className="linkTo"to="/portifolio">Ir para Portifólio</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}