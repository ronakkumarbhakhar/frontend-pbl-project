import React,{ Component } from "react"
import axios from "axios"
import "./attendancehistory.css"

class AttendanceHistory extends Component{
    constructor(props) 
    { 
        super(props);
        this.state = {data:[]}; 
    } 

    async request_handler() 
    {   
        let arr = [];
        console.log("componentDidMount()"); 
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('user_id');
        let api =axios.create({baseURL:'https://pbl-backend-def.herokuapp.com/api/'});
        let response1=await api.get(`attendance/${id}/`,{
            headers: {
                'Authorization':`Token ${token}`
            }})
        for (let res1_data of response1.data){
            let employee_id = res1_data.employee_id
            let response2=await api.get(`employeedetail/${employee_id}/`,{
                headers: {
                    'Authorization':`Token ${token}`
                }});
            let dic = {
                ...res1_data,
                ...response2.data
            }
            console.log("dic",dic)
            arr.push(dic)   
        };
        this.setState({data:arr})
        console.log("state",this.state.data)
        let data= this.state.data;
        console.log("array",arr)
        document.querySelector('#container').innerHTML=`
        <table class=" table">
                <thead class="table-dark">
                    <tr>
                        <th class="table_head">name</th>
                        <th class="table_head">date</th>
                        <th class="table_head">job</th>
                        <th class="table_head">status</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map((employee)=>{
                        return( `
                        <tr>
                            <td>${employee.employee_name}</td>
                            <td>${employee.job_type}</td>
                            <td>${employee.date}</td>
                            <td>${employee.present}</td>
                        </tr>`)
                        }) 
                    }
                </tbody>
            </table>`
    }

   
    
    componentDidMount(){
        this.request_handler();
    }


    render(){
        return(
            <div id="body_div">
                <div id="container">
                
                </div>
            </div>
        );
    }
};

export default AttendanceHistory;

