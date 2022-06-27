import React from "react";
import "./new_employee_form.css"
import axios from "axios";
// import {useNavigate} from "react-router-dom"
let api =axios.create({baseURL:'https://pbl-backend-def.herokuapp.com/api/'});

function NewEmployee(){
    
    // let navigate = useNavigate()
    let submit_handler = async (e)=>{
        e.preventDefault();
        let name = document.getElementById('Name').value
        let job = document.getElementById('Job').value
        let mobile = document.getElementById('Mobile').value
        let salary = document.getElementById('Salary').value
        let address = document.getElementById('Address').value
        let id = localStorage.getItem('user_id')
        let token =localStorage.getItem('token')
        let response = await api.post(`/employees/${id}/`,{employee_name:name,base_salary:salary,job_type:job,address:address,contact_no:mobile,employer_id:id},{
            headers: {
                'Authorization':`Token ${token}`
            }
        })
        console.log(response)
        if (response.data.len >0){
            alert('success')
        }
        setTimeout(()=> console.log("wait"),200)
        window.location.replace('/employees')
    }

    return(
        <div class="main">
            <form class="form" id="form" onSubmit={(e)=>submit_handler(e)}>
                <h3>NEW EMPLOYEE FORM</h3>
                <label htmlFor="Name">Name</label><br/>
                <input type='text' id="Name" class="input" required></input><br />
                
                <label htmlFor="Job">Job</label><br/>
                <input type='text' id="Job" class="input" required></input><br />
                
                <label htmlFor="Mobile">Mobile no.</label><br/>
                <input type='text' id="Mobile" class="input" required></input><br />
                
                <label htmlFor="Salary">Salary</label><br/>
                <input type='text' id="Salary" class="input" required></input><br />
                
                <label htmlFor="Address">Address</label><br/>
                <input type='text' id="Address" class="input" required></input><br />
                    
                <input id="login_btn" type="submit" value="submit" ></input>
            </form>
        </div>
    );
}

export default NewEmployee;