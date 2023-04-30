import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './Content/index'
import Edit from './Edit/index'
import Create from './Create/index';
import Img from './Img/index';
import Chart from './Chart/index';
import Graph from './Graph/index';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}/> 
        <Route path="/edit" element={<Edit />}/>
        <Route path="/create" element={<Create />}/> 
        <Route path="/img" element={<Img />}/>
        <Route path="/chart" element={<Chart />}/> 
        <Route path="/graph" element={<Graph />}/> 
        
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
