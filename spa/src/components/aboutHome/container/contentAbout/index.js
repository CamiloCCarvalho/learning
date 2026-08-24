import {React, Fragment, useState, useEffect} from 'react'
import {KnowledgeProg} from './knowledgeprog'

const initialState = {
    title: "Meus Conhecimentos",
    contentIntro: "Atualmente usando REACT, JS, BOOTSTRAP, HTML, CSS e RESTful APIs.",
    contentMid: "Também utilizo as stacks: TYPESCRIPT, SASS, BULMA, GIT, BABEL, WEBPACK.",
    contentEnd: "Atualmente estou disponivel para iniciar na carreira de desenvolvimento e estudando mais sobre REACT, NODE e BACK-END."
}

export const ContentAbout = () => {
    const [content, setContent] = useState({})
    
    useEffect(() => {
        setContent(initialState)
    }, [])

    const knowContent = {
        html: {width: "85%"},
        css: {width: "85%"},
        js: {width: "80%"},
        react: {width: "65%"},
        bootStrap: {width: "60%"},
        sass: {width: "70%"},
        git: {width: "60%"},
        ts: {width: "70%"},
        node: {width: "45%"},
        github: {width: "75%"},
        webpack: {width: "35%"},
        babel: {width: "45%"},
    }
    return (
        <Fragment>
            <div className="col-md coll">
                <h3 className="pt-2">{content.title}</h3>
                <hr/>

                <div className="knowledgeBox">

                    <KnowledgeProg backg="" contentText="HTML" percent={knowContent.html} percentNow="85" innerContent="%"/>

                    <KnowledgeProg backg="" contentText="CSS" percent={knowContent.css} percentNow="85" innerContent="%"/>

                    <KnowledgeProg backg="" contentText="JS" percent={knowContent.js} percentNow="80" innerContent="%"/>

                    <KnowledgeProg backg="bg-success" contentText="REACT" percent={knowContent.react} percentNow="65" innerContent="%"/>

                    <KnowledgeProg backg="bg-warning" contentText="BOOTSTRAP" percent={knowContent.bootStrap} percentNow="60" innerContent="%"/>

                    <KnowledgeProg backg="" contentText="SASS" percent={knowContent.sass} percentNow="70" innerContent="%"/>

                    <KnowledgeProg backg="bg-warning" contentText="GIT" percent={knowContent.git} percentNow="60" innerContent="%"/>

                    <KnowledgeProg backg="" contentText="TS" percent={knowContent.ts} percentNow="70" innerContent="%"/>

                    <KnowledgeProg backg="bg-danger" contentText="NODE" percent={knowContent.node} percentNow="35" innerContent="%"/>

                    <KnowledgeProg backg="" contentText="GITHUB" percent={knowContent.github} percentNow="75" innerContent="%"/>

                    <KnowledgeProg backg="bg-danger" contentText="WEBPACK" percent={knowContent.webpack} percentNow="35" innerContent="%"/>

                    <KnowledgeProg backg="bg-danger" contentText="BABEL" percent={knowContent.babel} percentNow="45" innerContent="%"/>
                </div>
            </div>
        </Fragment>
    )
}