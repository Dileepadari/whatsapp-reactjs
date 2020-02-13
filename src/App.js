import React from 'react';
import {Router} from 'react-router-dom';

import { Container, Row, Col, Image, } from 'react-bootstrap';
import "./assets/css/splashscreen.css";

// IMAGES
import imgLogo from './assets/images/logo.png';

function App() {
  return (
    <div className="App">
      <Container fluid className="screen">
          <div xs={6} md={4} className="d-flex justify-content-center align-items-center flex-column">
            <Image className="imgLogo" src={imgLogo}/>
            <h3 className="txtLogo mt-3">WhatsApp</h3>
            <a href="/whatsapp">Selanjutnya</a>
          </div>
      </Container>
    </div>
  );
}

export default App;
