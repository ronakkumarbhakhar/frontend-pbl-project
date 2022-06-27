import React  from "react";
import { Link } from "react-router-dom"
import  "./navbar.css"

function navbar_logged_out() {
    return ( 
        <div >
        <nav class = "navbar navbar-expand-lg  nav">
                <div class = "container-fluid" >
                    <Link class = "navbar-brand link" to ="/" > WSFMS </Link> 
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button> */} 
                    <div >
                        <ul class = "navbar-nav me-auto mb-2 mb-lg-0" >
                            <li class = "nav-item" >
                                <Link class = "nav-link  link"  to= "./login" > login </Link>
                            </li>
                            <li class = "nav-item" >
                                <Link class = "nav-link  link"  to= "./register" > register </Link>
                            </li>
                        </ul>
                    </div> 
                </div>
         </nav>
     </div>
    );
}

export default navbar_logged_out;