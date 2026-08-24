import{React} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <i className="fa-brands fa-github-alt"></i>
              
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">Inicio</a>
              </li>
              <li className="nav-item">
                <a href="/sobre" className="nav-link">Sobre</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Portifolio
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <a href="/portifolio" className="dropdown-item">Completo</a>
                  </li>
                  <li>
                    <a to="/" className="dropdown-item">Meus Projetos</a>
                  </li>
                  <li><hr className="dropdown-divider"/></li>
                  <li>
                    <a to="/" className="dropdown-item disabled">Paginas Clone</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    )
}