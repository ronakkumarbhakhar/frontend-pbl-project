/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Link } from "react-router-dom";
import "./home_logged_in.css"

function home_logged_in() {
    return (
    <div class="cards" > 
        <div class="card card_style">
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
                <h5 class="card-title">Attendance</h5>
                <p class="card-text">To check and post attendance of employees.</p>
                <Link to="/attendance" class="btn btn-primary">Attendance</Link>
            </div>
        </div>

        <div class="card card_style" >
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
                <h5 class="card-title">employees</h5>
                <p class="card-text">To add new employees.Or to check data of previous employee</p>
                <Link to="/employees" class="btn btn-primary">employee</Link>
            </div>
        </div>

        <div class="card card_style" >
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body">
                <h5 class="card-title">Salary</h5>
                <p class="card-text">To check and post attendance of employees.</p>
                <Link to="salary" class="btn btn-primary">salary</Link>
            </div>
        </div>
    </div>
    );
}

export default home_logged_in;