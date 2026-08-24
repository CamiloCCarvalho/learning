import {React, Fragment} from 'react'
import {GridProjects} from '../../../shared/gridProjects'
import {ItemProject} from '../../../shared/gridProjects/itemProject'
import './personalClones.css'


export const PersonalClones = () => {


    return (
        <Fragment>
            <div className="container-fluid mt-5 mb-5 personalClonesBox">
                <h2 id="titleClones"className="display-3 text-center pt-2 pb-3">Clone Pages</h2>
                    <GridProjects>
                        <a target="_blank" href="https://musicdot.vercel.app">
                            <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/src/img/clonemusicdot.jpeg" textAlt="Ilustração da MusicDot Clone"/>
                        </a>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" textAlt=""/>
                        <ItemProject linkURL="https://raw.githubusercontent.com/CamiloCCarvalho/my-landing-page/master/public/coming-soon.png" textAlt=""/>
                    </GridProjects>
            </div>
        </Fragment>
    )
}

