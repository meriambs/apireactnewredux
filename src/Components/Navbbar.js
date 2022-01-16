import React from 'react'
import { Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from "react-router-dom";

const Navbbar = ({toggelLogin, login}) => {
    return (
        <div >
<nav >
  <ul style={{display:'flex',justifyContent:"space-around",textDecoration:"none"}}>
    <li >
    <Link to="/">Home</Link>
    </li>
    <li >
      <Link to="/contactlist">Contact</Link>
    </li>
    <button onClick={toggelLogin}>{
      login ? "log out" :"Log in"
    }</button>
  </ul>
</nav>
        </div>
    )
}

export default Navbbar
