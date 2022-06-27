import React,{ Component } from "react"
import axios from "axios"
import "./employees.css"
import { Link } from "react-router-dom";
class Employees extends Component{
    constructor(props) 
    { 
        super(props);
        this.state = { data : [] }; 
    } 

    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('user_id');
        console.log(token, id);
        let api =axios.create({baseURL:'https://pbl-backend-def.herokuapp.com/api/'});
        api.get(`employees/${id}/`,{
            headers: {
                'Authorization':`Token ${token}`
            }
        }).then((response)=>{
            console.log(response);
            this.setState({data:response.data})
            let data = this.state
            console.log(data)
            document.querySelector('#container').innerHTML=`
            <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th class="table_head">name</th>
                            <th class="table_head">job</th>
                            <th class="table_head">contact no.</th>
                            <th class="table_head">salary</th>
                            <th class="table_head">address</th>
                        </tr>
                    </thead>
                        ${this.state.data.map((employee)=>{
                            return( `
                            <tr>
                                <td>${employee.employee_name}</td>
                                <td>${employee.job_type}</td>
                                <td>${employee.contact_no}</td>
                                <td>${employee.base_salary}</td>
                                <td>${employee.address}</td>
                            </tr>`)
                            }) 
                        }
                </table>`
        })
        .catch(err => console.log(err))
    };

    render(){
        return(
            <div id="body_div">
                <div id="container">
                
                </div>
            <Link class= "btn btn-primary btn-position"  to="/newemployee">+new</Link>
            </div>
        );
    }

}
export default Employees;

