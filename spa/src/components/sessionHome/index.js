import {React, Fragment} from 'react'
import './sessionHome.css'

//PAGE MAIN - FIRST PIECE
export const SessionHome = ()  => {
    return (
        <Fragment>
            <div className="sessionHome">
                <p className="display-1" id="home-name">Eu sou <i>Camilo</i></p>
                <p className="display-5 mt-3" id="home-content">Front-End Developer Jr. Desenvolvendo com React, BootStrap, JS e +</p>

                <div className="flip-card mt-5">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div id="imageDev"></div>
                        </div>
                        <div className="flip-card-back">
                            <h1>Camilo Costa</h1>
                            <p>FRONT-END Jr.</p>
                            <p>Estudando React e APIs</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}