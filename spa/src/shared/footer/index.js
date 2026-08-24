import {React, Fragment} from 'react'
import dayjs from 'dayjs'
import './footer.css'

const datas = dayjs().format("DD - MM - YYYY")


export const Footer = () => {


    return (
        <Fragment>
                <div id="footerBox" className="container-fluid bg-dark">
                    <div id="footer" className="card text-center">
                        <div className="card-header">
                            {datas}
                        </div>
                        <div className="card-body mt-4 mt-4">
                            <h5 className="card-title">Front-End Developer</h5>
                            <p className="card-text">Não esqueça de visitar as outras Abas!</p>
                        </div>
                        <div className="card-footer text-center pt-3 mt-3">
                            <div className="i-flex">
                                <a target="_blank" href="https://www.linkedin.com/in/camilocostac/">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>

                                <a target="_blank" href="https://github.com/CamiloCCarvalho">
                                    <i className="fa-brands fa-github"></i>
                                </a>

                                <a target="_blank" href="https://www.facebook.com/camilo.carvalho.338658">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}