import ReactDOM from "react-dom/client";
import React from "react";
import './index.css'
import { useNavigate } from 'react-router-dom';

import close from './th.jpg'
function Content() {
    const navigate = useNavigate();
    const handlesumbit = (e) => {
        e.preventDefault();
        navigate("/create")
    }
    return (<>
        <div className="header">
            <h1> Contact Page</h1>
            <div className="left">
                <li> <a className="link" href="#">Contact</a></li>
                <li> <a className="link" href="#">Charts and Maps</a></li>
                <p> Sidebar</p>
            </div>
            <div className="baground">
                <div className="btn">
                    <button onClick={handlesumbit}> Create Contact</button></div>
                <div className="container">
                    <img src={close} alt="" />
                    <p>
                        NO Contact Found Please add Contact from Create Contact button
                    </p>
                </div>
            </div>

        </div>


    </>)
}
export default Content