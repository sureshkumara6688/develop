
import React from "react";
import './index.css'

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Edit() {
  const [input, setInput] = useState([{ firstname: '', lastname: '' }])
  const [reset, setReset] = useState('')

  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([]);
  const [world, setWorld] = useState([]);
  const [graph, setGraph] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const navigate = useNavigate();
  const navanotherpage = (e) => {
    e.preventDefault()
    navigate("/edit")
  }
  const handlecheck = (e) => {
    const { checked, value } = e.target;
    setChecked(!checked);
    console.log(checked, value)
  }
  const handlechange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value }
    })
    setReset('')
  }
  const handlesumbit = (e) => {

  }
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((response) => {
        setWorld(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {
        setGraph(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(input)
  console.log(data)
  console.log(world)
  console.log(graph)
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
          <h2> Create Contact Screen</h2></div>
        <div className="formsubmit">
          <form onSubmit={handlesumbit}>
            <div className="formdata">
              <label>First Name</label>
              <input type="text " onChange={handlechange} value={input.firstname} /></div>
            <div className="formdata">
              <label>Last Name</label>
              <input type="text " onChange={handlechange} value={input.lastname} /></div>
            <div className="status">
              <div className="formdatax">
                <label>Status</label>  </div>
              <div className="checkactive">
                <input type="radio" value="Active" name="check" onChange={handlecheck} />
                <label >Active</label><br></br>
                <input type="radio" value="inactive" name="check" onChange={handlecheck} />
                <label >Inactive</label>
              </div>
            </div>
          </form>
        </div>
        <div className="btn">
          <button onClick={navanotherpage}> Save Contact</button></div>
      </div >

    </div>



  </>)
}
export default Edit