import React  from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
function Navbar_logged_in() {

    const logout_handler = (event)=>{
        event.preventDefault()
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        window.location.replace('/')
    }
    return ( 
        <div >
           <nav class = "navbar navbar-expand-lg  nav" >
                <div class = "container-fluid" >
                    <Link class = "navbar-brand link"  to = "/" > WSFMS </Link> 
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button> */} 
                    <div  >
                        <ul class = "navbar-nav me-auto mb-2 mb-lg-0" >
                            <li class = "nav-item" >
                                <a className = "nav-link  link" href="/" onClick={(event)=>logout_handler(event)} > logout </a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
);
}

export default Navbar_logged_in;