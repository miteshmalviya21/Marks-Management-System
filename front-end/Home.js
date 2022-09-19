import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaYoutubeSquare } from 'react-icons/fa';
import "./Css/style.css"



export default function Home() {
  return (
    <div>
      <div>
        <nav className="main-nav">
          {/* 1st logo part */}
          <div className="logo">
            <h2>
              <span>M</span>arks
              <span>M</span>anagement
              <span>S</span>ystem
            </h2>
          </div>
          <div className="menu-link">
            <ul >
              
              <li>
                {/* <Link to="/">Home</Link> */}
                <a href="/">Home</a>
              </li>
              <li>
                {/* <Link to="/About">About Us</Link> */}
                <a href="/about">About Us</a>
              </li>
              <li>
                {/* <Link to="/Contact">Contact Us</Link> */}
                <a href="/contact">Contact</a>
              </li>
              <li>
                {/* <Link to="/login">Login Here</Link> */}
                <a href="/login">Login Here</a>
              </li>
            </ul>
          </div>
          {/* 3rd social media link */}
          <div className="social-media">
            <ul>
              <li>
                <a href="https://www.google.co.in/" target="_Google"  ><FaGoogle className="google"/></a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_YouTube" ><FaYoutubeSquare className="youtube"/></a>
              </li>
            </ul>

          </div>
        </nav>
        <section className="hero-section">
        <p>Welcome to </p>
        <h1>Marks Manangement System App</h1>
        </section>
      </div>
    </div>
  )
}