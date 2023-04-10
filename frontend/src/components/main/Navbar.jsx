import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="homepage">
                        <b><i>DIGIHUB</i></b>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link link-light" aria-current="page" to="homepage">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light" aria-current="page" to="signup">
                                    SignUp
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light" aria-current="page" to="signin">
                                    SignIn
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light" aria-current="page" to="feedback">
                                    FeedBack
                                </Link>
                            </li>
                            
                           
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar