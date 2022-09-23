import React from "react";
import "./Css/calculate.css"
//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Css/button.css"


export default function Evaluation()
{
    const navigate = useNavigate();

function Calc()
{

    let num1 = parseFloat( document.getElementById("cop").value);
    let num2 = parseFloat( document.getElementById("java").value);
    let num3 = parseFloat( document.getElementById("ds").value);
    let num4 = parseFloat( document.getElementById("dbt").value);
    let num5 = parseFloat( document.getElementById("wpt").value);
    let num6 = parseFloat( document.getElementById("advj").value);
    let num7 = parseFloat( document.getElementById("sdm").value);
    let num8 = parseFloat( document.getElementById("net").value);

    var precentage = (num1+num2+num3+num4+num5+num6+num7+num8)/32;
    document.getElementById("show").innerHTML = "Result : " +precentage*10+"%";

}

    return(
        <div className="calculate">
        <h1>Calculate Your Result</h1><br /><br />
        COP OS : <input type="number" id="cop" max={40} min={0}></input><br /><br />
        Core JAVA : <input type="number" id="java" max={40} min={0}></input><br /><br />
        Algorithms and Data Structure : <input type="number" id="ds" max={40} min={0}></input><br /><br />
        Database Technologies : <input type="number" id="dbt" max={40} min={0}></input><br /><br />
        Web Programming Technologies : <input type="number" id="wpt" max={40} min={0}></input><br /><br />
        Web Based Java Programming : <input type="number" id="advj" max={40} min={0}></input><br /><br />
        Software Development Methodologies : <input type="number" id="sdm" max={40} min={0}></input><br /><br />
        .Net Technologies : <input type="number" id="net" max={40} min={0}></input><br /><br />
        <input type="button" value="Calculate" id="calc" onClick={Calc}></input><br /><br />
        <h1 id="show"></h1>
        <div className="button">
            <input type="button" value="Logout" onClick={()=>{navigate("/login")}} ></input>
        </div>
        </div>
    )
}