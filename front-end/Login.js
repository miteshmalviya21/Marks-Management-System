import React from 'react';
//import './Login';
import './Css/login.css'
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const navigate = useNavigate();
  
    const RegistrationPage = () => {
        navigate('/registration');
    }
   
    return (
        <div>
            <div className='login' >
                <h1>Login</h1>
                <input type="text" id='uname' placeholder='Username' /><br /><br />
                <input type="password" id='pwd' placeholder='PassWord' /><br /><br />
                
                <input type="button" value="Login" onClick={()=>navigate("/evaluation")} /><br /><br />
                
                <input type="button" value="Register Here" onClick={RegistrationPage} />
            </div>
        </div>

    );
}