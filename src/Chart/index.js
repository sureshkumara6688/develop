
import React from "react";
import './index.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
function Chart() {
    const [world, setWorld] = useState([]);
    const [graph, setGraph] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const position = [51.505, -0.09]
    const handlesumbit = () => {

    }
    useEffect(() => {
       
        axios
          .get("https://disease.sh/v3/covid-19/countries")
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
      console.log(world)
    return (<>
        <div className="header">
            <h1> Contact Page</h1>
            <div className="left">
                <li> <a className="link" href="#">Contact</a></li>
                <li> <a className="link" href="#">Charts and Maps</a></li>
                <p> Sidebar</p>
            </div>
            <div className="baground">
                Render maps as mentioned in the question

                <div className="dd"> <div className="maps">
                    
                    <MapContainer  className="fixing" center={position} zoom={12} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://disease.sh/v3/covid-19/countries">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                </div></div>

        </div>



    </>)
}
export default Chart