import React, { useState } from "react";
import './Product.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { CardMedia } from "@mui/material";

export default function Products(){
    const [color, setColor] = useState("#80CED7");

    return(
        <Container>
           <Row className="item">
                <Col sm={6}>
                <CardMedia className="image"
                    component="img"
                    height="200"
                    image='https://m.media-amazon.com/images/I/61AqZPOI+2L._AC_SL1500_.jpg'
                    alt="Ligth"
                />
                </Col>
                <Col className="info">
                    <h2>LED RGBCW</h2>
                    <br />
                    <br />
                    <h4>Smart Speakers & Displays</h4>
                    <br />
                    <p>This is an incredible speaker perfect to... This is an incredible speaker perfect to...</p>
                    <Row className="buttonRow">
                    <Col style={{ textAlign: "right" }}>
                        <p>Price: 15$</p>
                        <a>
                        <Button id="buy" variant="primary">
                            Buy Now
                        </Button>
                        </a>
                    </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
    )
}