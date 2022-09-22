import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Css/Registration.css'

export default function Registration()
{
    let navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const emailValidation = () => {
        const regEx = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
        if(regEx.test(email)){
            setMessage("Email is valid");
        } else if(!regEx.test(email) && email !==""){
            setMessage("Email is not valid");
        } else{
            setMessage("");
        }
        
    };

    const handleOnChange = (event) => {
        setEmail(event.target.value);
    };



    return(
        <div className="register" >
            <h1>Registration</h1>
            <form onSubmit={emailValidation}>
            <div className="inputcss">
            First Name : <input type="text" placeholder="Enter first name" ></input><br /><br />
            Last Name : <input type="text" placeholder="Enter last name" ></input><br /><br />
            Emai id : <input type="email" placeholder="example@gmail.com" value={email} onChange={handleOnChange} ></input><br /><br />
            Institute Name : <input type="text"></input><br /><br />
            PRN Number : <input type="text" placeholder="Enter 12 digit number" ></input><br /><br />
            Course : <input type="text" ></input><br /><br />
            User Name : <input type="text" id='uname' placeholder='Username' /><br /><br />
            Password : <input type="password" id='pwd' placeholder='Password' /><br /><br />
            Confirm Password : <input type="password" id='cpwd' placeholder='Re-Enter Password' /><br /><br />
            {/* <input type="button" value="Register" onClick={(e)=>{ emailValidation(); e.navigate("/login")}}></input> */}
            <button onClick={()=>{ navigate("/login")}} >Register</button>
            {message}
            </div> 
            </form>
        </div>

    )
    
}