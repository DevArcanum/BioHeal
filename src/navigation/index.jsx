import React from "react"
import { Link } from "react-router-dom"

import "../style.css"

const Navigation = () => {
    return <div class="container-fluid bg-dark mb-30">
        <div class="row px-xl-5">

            <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                            <a class="nav-item nav-link active"><Link to="/about">About</Link></a>
                            <a class="nav-item nav-link active"><Link to="/contact">Contact</Link></a>
                        </div>
                        <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <a href="cart.html" class="btn px-0 ml-3">
                                <Link to="/cart">
                                <i class="fas fa-shopping-cart text-primary"></i>
                                <span class="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                                </Link>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
}

export default Navigation;