// // import React from "react";
// import React, { Component } from 'react'; 
// import Jumbotron from "../components/Jumbotron";
// import Container from "../components/Container";
// import star from "../images/star.png";

import React from 'react';
import './index.css';

import point2 from '../images/point2.png';
import board from '../images/board.jpg';
import { Container } from '../components/Grid';

const Main = () => {
    

    return (
        // <div className="App" style={{backgroundImage: `url(${point2})` }}>
        <div>
            <div className="App-content">
              
              <Container>
                <h1>Participation patrons</h1>
                <img src={point2} width='100%'></img>
                </Container>
            </div>
        </div>
    );
};

export default Main;