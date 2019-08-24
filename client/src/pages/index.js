// // import React from "react";
// import React, { Component } from 'react'; 
// import Jumbotron from "../components/Jumbotron";
// import Container from "../components/Container";
// import star from "../images/star.png";

import React from 'react';
import './index.css';

import classroom from '../images/classroom.jpg';
import board from '../images/board.jpg';
import { Container } from '../components/Grid';

const Main = () => {
    

    return (
        <div className="App" style={{backgroundImage: `url(${board})` }}>
            <div className="App-content">
              
              <Container>
                <h1>Participation patrons</h1>
                </Container>
            </div>
        </div>
    );
};

export default Main;