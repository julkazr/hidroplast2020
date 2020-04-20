import React from 'react';
import Navbar from './component/Navbar/Navbar';
import ParticlesBanner from './component/Banner/ParticlesBanner';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Clientslogo from './component/Clientslogo';
import MapContainer from './component/Map';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import jhonData from './component/jhonData';


export const Home3 = () => (
  <div className="body_wrapper">
      <Navbar mClass="dark_menu"/>
      <ParticlesBanner jhonData={jhonData}/>
      <About aClass='about_area bg_color' jhonData={jhonData}/>
      <Service wClass="work_area_two" jhonData={jhonData}/>
      <Portfolio pClass="bg_color"/>
      <Skill cClass="bg_w"/>
      <Testimonial/>
      <Clientslogo/>
      <MapContainer/>
      <Contact jhonData={jhonData}/>
      <Footer jhonData={jhonData}/>
  </div>
)


