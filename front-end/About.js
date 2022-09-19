import React from "react";
import "./Css/about.css"

export default function About()
{
    return(
        <div className="about">
            <h1>Marks Management System App</h1> 
            <p>Marks Management System App is just a simple calculater to calculate student percentages and each student has there different login and password.</p>
            <p>If students have to calculate his/her percentage , first his/her have to create their own "userId and PassWord" to login into an app.</p>
            <p>If a student is already registered in the app , they will only see their result direclty through the app.</p>
        </div>
    )
}