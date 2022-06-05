import React, { useState } from "react";
import './Product.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { CardMedia } from "@mui/material";

import { useStoreContext } from '../../utils/GlobalState';
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
} from '../../utils/actions';

export default function Products(){
    const [color, setColor] = useState("#80CED7");
    const [state, dispatch] = useStoreContext();

    // const addToCart = () => {
    //     dispatch({
    //         type: ADD_TO_CART,
    //         product: { ...currentProduct, purchaseQuantity: 1 }
    //     });
    // };

    return(
        <Container>
           <Row className="item">
                <Col sm={6}>
                <CardMedia className="image"
                    component="img"
                    height="200"
                    image={state.product.img}
                    alt="Ligth"
                />
                </Col>
                <Col className="info">
                    <h2>{state.product.title}</h2>
                    <br />
                    <br />
                    <h4>{state.product.categoryF}</h4>
                    <br />
                    <p>{state.product.description}</p>
                    <Row className="buttonRow">
                    <Col style={{ textAlign: "right" }}>
                        <p>Price: ${state.product.price}</p>
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