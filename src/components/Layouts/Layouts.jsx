import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer'; 
import './Layouts.css'; 

const Layouts = ({ children }) => {
  return (
    <div>
        <NavBar />
        <div className="content">{children}</div> 
        <Footer/>
    </div>
  );
};

export default Layouts;
