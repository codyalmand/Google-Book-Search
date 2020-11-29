import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container" id="navcontainer"><br></br>
                <h1 id="title">Google Book Search</h1>
                <ul className="navbar-nav">
                    <button id="searchButton" class="btn btn-dark">
                        <Link
                            to="/search" id="buttonText"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Search</Link>
                    </button>
                    <button id="savedButton" class="btn btn-dark">
                        <Link
                            to="/saved" id="buttonText"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Saved</Link>
                    </button>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;