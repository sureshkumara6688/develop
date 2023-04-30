import ReactDOM from "react-dom/client";
import React from "react";
import './index.css'
import logo from './logobest.png'
function Img() {

    const handlesumbit = () => {

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
                <div className="btns">
                    <button>Create Contact</button>
                </div>
                <div className="separate">
                <div className="imges">
                    <img src={logo} alt="img"/><br></br>
                    <button className="green">Edit</button><br></br>
                    <button className="red">Delete</button>
                </div>
                <div className="imges">
                    <img src={logo} alt="img"/><br></br>
                    <button className="green">Edit</button><br></br>
                    <button className="red">Delete</button>
                </div>

                </div></div>
            </div>

    


    </>)
}
export default Img