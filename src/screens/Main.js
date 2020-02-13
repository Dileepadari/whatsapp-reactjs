import React from 'react';
import '../assets/css/custom.css';

import imgProfile from '../assets/images/logo.png'

import { FaEllipsisV, FaHotjar, FaUndo, FaSearch } from 'react-icons/fa';

import {Container, Row, Col, Card, Image, Button} from 'react-bootstrap';

function Main() {
  return (
    <div className="Main">
        <div className="bgColor"></div>
        <Container fluid className="containerBox">
          <Card className="cardBox">
            <Row>
              <Col lg={4}>
                <Row>
                  <Col lg={2}>
                    <Image src={imgProfile} className="circle imgProfile"></Image>
                  </Col>
                  <Col lg={6}></Col>
                  <Col lg={4}>
                    <Button variant="link textPrimary"><FaUndo/></Button>
                    <Button variant="link textPrimary"><FaHotjar/></Button>
                    <Button variant="link textPrimary"><FaEllipsisV/></Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={2}>
                    <FaSearch/>
                  </Col>
                  <Col lg={10}>

                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={2}>
                    <Image src={imgProfile} className="circle imgProfile"></Image>
                  </Col>
                  <Col lg={6}></Col>
                  <Col lg={4}>
                    <Button variant="link textPrimary"><FaUndo/></Button>
                    <Button variant="link textPrimary"><FaHotjar/></Button>
                    <Button variant="link textPrimary"><FaEllipsisV/></Button>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                CHAT VIEW
              </Col>
            </Row>
          </Card>
        </Container>
    </div>
  );
}

export default Main;
