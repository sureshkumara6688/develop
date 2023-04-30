import ReactDOM from "react-dom/client";
import React from "react";
import './index.css'
import close from './th.jpg'
function Edit() {

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
                <div className="heading">
                    <h2> Editted Contact Screen</h2>
                </div>
                <div className="formsubmit">
                    <form onSubmit={handlesumbit}>
                        <div className="formdata">
                            <label>First Name</label>
                            <input type="text " />
                        </div>
                        <div className="formdata">
                            <label>Last Name</label>
                            <input type="text " />
                        </div>
                        <div className="status">
                            <div className="formdatax">
                                <label>Status</label>
                            </div>
                            <div className="checkactive">
                                <input type="radio" value="Active" />
                                <label for="html">Active</label><br></br>
                                <input type="radio" value="inactive" />
                                <label for="html">Inactive</label>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="btn">
                    <button> Save Editted Contact</button>
                </div>
            </div >

        </div>




    </>)
}
export default Edit