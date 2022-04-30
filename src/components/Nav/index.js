import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top" id="nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Shelley Soucie - React Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#aboutMe" >About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://docs.google.com/document/d/1f_hGoFPjLyUcbznYaE0cjoH1MTlSjev1/edit?usp=sharing&ouid=102007345670684999399&rtpof=true&sd=true" target="_blank">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;