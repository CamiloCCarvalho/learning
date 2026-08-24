import {React, Fragment} from 'react'
import './contentAbout.css'


export const ContentAbout = () => {



    return (
        <Fragment>
            <div id="aboutBox"className="card text-center">
                <div className="card-header headerAbout">
                    <ul id="aboutNav"className="nav nav-tabs card-header-tabs">
                    <li className="nav-item aboutPage">
                        <a id="aboutNavItem-1"className="nav-link active" aria-current="true" href="#">Sobre</a>
                    </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title title-about mt-4">APRESENTAÇÃO</h5>
                    <p className="card-text text-about m-5">Tenho 29 Anos, atualmente <i>busco uma oportunidade para iniciar carreira de desenvolvimento Web</i>, preferencialmente Front-End onde tenho mais dominio. Sou formado em Gestão de Recursos Humanos porem não atuo na area, estudo programação a cerca de 1 ano, foco em web e suas principais ferramentas.</p>

                    <h5 className="card-title title-about">STACKS</h5>
                    <p className="card-text text-about m-5">Maior conhecimento e pratica em: <i>JAVASCRIPT, HTML, CSS (SASS).</i> Seguido destas tenho iniciado o uso de <i>WEBPACK e BABEL</i> para entender os bastidores do React. E junto a isto estudando Node, TypeScript e APIs.</p>

                    <h5 className="card-title title-about">CONSTRUINDO UMA SPA</h5>
                    <p className="card-text text-about m-5">Nesta pagina utilizei <i>REACT e BOOTSTRAP</i> para a construção dos elementos, estilos e funcionalidades. Explorando os <i>Components, Routes, Props e Hooks.</i> Pretendo ampliar a gama de ferramentas utilizadas.</p>

                    <h5 className="card-title title-about">ESTUDOS</h5>
                    <p className="card-text text-about m-5">Referência de <i>StackOverFlow, Github, videos e cursos.</i> Atualmente estou na fase final do Curso de FullStack JavaScript da empresa denominada <a href="https://cursos.onebitcode.com/">OneBitCode.</a></p>
                </div>
            </div>
        </Fragment>
    )
}