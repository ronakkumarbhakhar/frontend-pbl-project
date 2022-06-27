import React from "react";
import "./login.css"
import axios from "axios";
// import {useNavigate} from "react-router-dom"
const api =axios.create({baseURL:'https://pbl-backend-def.herokuapp.com/api/'})
function Login(){
    
    // let navigate = useNavigate()
    let submit_handler = async (e)=>{
        e.preventDefault();
        let uname = document.getElementById('username').value
        let passwd = document.getElementById('passwd').value
        let response = await api.post('/api-auth/login/',{username:uname,password:passwd})
        console.log(response)
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('user_id',response.data.user_id)
        setTimeout(()=> console.log("wait"),200)
        window.location.replace('/')
        // navigate('/')
    }
    return(
        <div class="main">
            <form className="form" id="form" onSubmit={submit_handler}>
                <h3>LOGIN</h3>
                <label htmlFor="username">Username</label><br/>
                <input type='text' id="username" className="input" required></input><br />

                <label htmlFor="password">Password</label><br/>
                <input type='password' id="passwd" className="input" required></input><br />

                <input id="login_btn" type="submit" value="submit" ></input>
            </form>
        </div>
    );
}

export default Login;