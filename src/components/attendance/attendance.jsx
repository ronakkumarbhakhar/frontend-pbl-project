import React,{ Component } from "react";
import axios from "axios";
import "./attendance.css";
import { Link } from "react-router-dom";
class Attendance extends Component{
    constructor(props) 
    { 
        super(props);
        this.state = { data : [] }; 
    } 

    async present_mark_handler(employee_id){
        console.log("present button clicked");
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('user_id');
        let api =axios.create({baseURL:'https://pbl-backend-def.herokuapp.com/api/'});
        let response = await api.post(`attendance/${id}/`,{employee_id:employee_id,present:true,employer_id:id},{
            headers: {
                'Authorization':`Token ${token}`
            }
        });
        console.log("present handler response",response);
    }
    
    async absent_mark_handler(employee_id){
        console.log("present button clicked");
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('user_id');
        let api =axios.create({baseURL:'https://pbl-backend-def.herokuapp.com/api/'});
        let response = await api.post(`attendance/${id}/`,{employee_id:employee_id,present:false,employer_id:id},{
            headers: {
                'Authorization':`Token ${token}`
            }
        });
        console.log("absent handler response",response);
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
            // let id = localStorage.getItem('user_id');
            console.log(response);
            this.setState({data:response.data});
            let data = this.state;
            console.log(data);
            document.querySelector('#container').innerHTML=`
            <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th class="table_head">name</th>
                            <th class="table_head">job</th>
                            <th class="table_head">contact no.</th>
                            <th class="table_head">present</th>
                            <th class="table_head">absent</th>
                        </tr>
                    </thead>
                        ${this.state.data.map((employee)=>{

                            return( `
                            <tr>
                                <td>${employee.employee_name}</td>
                                <td>${employee.job_type}</td>
                                <td>${employee.contact_no}</td>
                                <td><button class= "btn btn-primary btn-position" >Present</button></td>
                                <td><button class= "btn btn-primary btn-position" >absent</button></td>
                            </tr>`)
                            }) 
                        }
                </table>`
        })
        .catch(err => console.log(err));
    };

    render(){
        return(
            <div id="body_div">
                <div id="container">
                
                </div>
                <Link class= "btn btn-primary btn-position" to='/attendancehistory'>Show History</Link>
            </div>
        );
    }

}
export default Attendance;