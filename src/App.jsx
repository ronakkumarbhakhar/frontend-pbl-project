/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Home_logged_out from './Home/home_logged_out';
import Home_logged_in from './Home/home_logged_in';
import Navbar_logged_out from './components/navbar/navbar_logged_out';
import Navbar_logged_in from './components/navbar/navbar_logged_in';
import Login from './components/authentication/login'
import Register from './components/authentication/registeration'
import React,{useState,useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Employees from './components/employees/employees';
import NewEmployee from './components/employees/new_employee_form'
import Attendance from './components/attendance/attendance';
import AttendanceHistory from './components/attendance/attendancehistory';
function App() {
    let [State,setState]=useState({token:window.localStorage.getItem('token'),user_id:localStorage.getItem('user_id'),loggedIn:false})
    let check_localstorage = ()=>{
        if (localStorage.getItem('token') && localStorage.getItem('user_id')){
            setState({token:window.localStorage.getItem('token'),user_id:localStorage.getItem('user_id'),loggedIn:true});
        }
    }
    useEffect(()=>{
      check_localstorage(); 
    },[])
    return (
        <div>
            { State.loggedIn ? <Navbar_logged_in/> : <Navbar_logged_out />}
            <Routes>
            
                <Route exact path='' element={(State.loggedIn) ? <Home_logged_in/> : <Home_logged_out /> } />

                <Route exact path='login' element={ <Login/>} />

                <Route exact path='register' element={<Register/>} />

                <Route exact path='employees' element={<Employees/>}/>
                
                <Route exact path='newemployee' element={<NewEmployee/>} />

                <Route exact path='attendance'  element={<Attendance/>} />

                <Route exact path='attendancehistory' element={<AttendanceHistory/>} />

            </Routes>
        </div>
    );
}

export default App;