import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <Link to={"/"} class="nav-link active"  href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/AboutUs"} class="nav-link active"> AboutUs </Link>
                            </li>
                            <li class="nav-item">
                            <Link to={"/Services"} class="nav-link active">Services</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={"/Partners"} class="nav-link active">Partners</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={"/Portfolio"} class="nav-link active">Portfolio</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={"/Help"} class="nav-link active">Help</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={"/FAQs"} class="nav-link active">FAQs</Link>
                            </li>
                            
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
