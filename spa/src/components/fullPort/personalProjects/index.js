import {React, Fragment} from 'react'
import {GridProjects} from '../../../shared/gridProjects'
import {ItemProject} from '../../../shared/gridProjects/itemProject'
import {Link} from 'react-router-dom'

import './personalProjects.css'


export const PersonalProjects = () => {


    return (
        <Fragment>
            <div className="container-fluid mt-5 personalProjectsBox">
                <h2 className="display-3 text-center pt-2 pb-3">Projects</h2>
                <GridProjects>
                        <Link to="/portifolio/clockanalogic">
                            <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/relogioanalogico.jpeg" textAlt="Relogio Analogico"/>
                        </Link>
                        <Link to="/portifolio/clockdigital">
                            <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/relogiodigital.jpeg" textAlt="Relogio Digital"/>
                        </Link>
                        
                        <Link to="/portifolio/hashgame">
                            <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/jogodavelha.jpeg" textAlt="Jogo da Velha"/>
                        </Link>
                        
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/calculadora.jpeg" textAlt="Calculadora"/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" textAlt=""/>
                </GridProjects>
            </div>
        </Fragment>
    )
}