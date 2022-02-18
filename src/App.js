import React from 'react';
import Header from '../src/Component/header';
import Nav from "../src/Component/nav";
import History from "../src/Component/About/History";
import Mission from './Component/About/Mission';
import Belifs from './Component/About/Belifs';
import Unique from './Component/About/Unique';
import ContactUs from './Component/Contact Us /ContactUs';
import {  Route,  Routes } from "react-router-dom"

// import Who from "./Component/Who"


export default function App() {
  return (
   
    <div className="App">
     <Header />
     <Routes>
     
      <Route  path= "/Home" element = {<Nav/>} />
     
      
    
     */}

      <Route path="/History" element = {<History/> }/>

      <Route path="/OurBelifs" element = {<Belifs/> }/>
     
      <Route path="/MissionAndVision" element = {<Mission/> }/>
      <Route path="/OurUniqueness" element = {<Unique/> }/>
      <Route path="/ContactUs" element = {<ContactUs/> }/>
      </Routes>
      {/* <Who /> */}
    </div>
   
  );
}