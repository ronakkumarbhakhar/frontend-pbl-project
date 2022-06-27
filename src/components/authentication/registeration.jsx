import React from "react";
import "./registeration.css"
import axios from "axios";

const api =axios.create({baseURL:'https://pbl-backend-def.herokuapp.com/api/api-auth'})
function Register(){
    let submit_handler = async (event)=>{
        event.preventDefault();
        let uname = document.getElementById('username').value
        let passwd = document.getElementById('password').value
        let passwd2 = document.getElementById('password2').value
        let email = document.getElementById('email_id').value
        let fname = document.getElementById('first_name').value
        let lname = document.getElementById('last_name').value
        let response = await api.post('/registration/',{'username':uname,'email':email,'password':passwd,'password2':passwd2,'first_name':fname,'last_name':lname})
        console.log(response)
        // localStorage.setItem('token',response.data.token)
        // localStorage.setItem('user_id',response.data.username)
        setTimeout(()=> console.log("wait"),200)
        // window.location.replace('/')
        // navigate('/')
    }
    return(
        <div>
            <form class="form" onSubmit={(event)=>submit_handler(event)}>
                <h3>REGISTERATION FORM</h3>
                <label htmlFor="username">Username</label><br/>
                <input type='text' id="username" class="input" required></input><br />

                <label htmlFor="first_name">First name</label><br/>
                <input type='text' id="first_name" class="input" required></input><br />

                <label htmlFor="last_name">Last name</label><br/>
                <input type='text' id="last_name" class="input" required></input><br />

                <label htmlFor="email_id">Email id</label><br/>
                <input type='email' id="email_id" class="input" required></input><br />

                <label htmlFor="password">Password</label><br/>
                <input type='password' id="password" class="input" required></input><br />

                <label htmlFor="password2">Confirm Password</label><br/>
                <input type='password' id="password2" class="input" required></input><br />

                <input id="register_btn" type="submit" value="Register"></input>
            </form>
        </div>
    );
}

export default Register;