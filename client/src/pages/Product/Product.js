import React, { useState } from "react";
import './Product.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import { CardMedia } from "@mui/material";

import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
} from '../../utils/actions';

import Auth from '../../utils/auth';
import { idbPromise } from "../../utils/helpers";

export default function Products(){
    const [state, dispatch] = useStoreContext();

    const addToCart = () => {
        const itemInCart = state.cart.find((cartItem) => cartItem.id === state.product.id);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                id: state.product.id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', { ...state.product, purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1 });
            } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...state.product, purchaseQuantity: 1 }
            });
            idbPromise('cart', 'put', { ...state.product, purchaseQuantity: 1 });
        }
    };

    return(
        <Container>
           <Row className="item">
                <Col sm={6}>
                <CardMedia className="image"
                    component="img"
                    height="200"
                    image={process.env.PUBLIC_URL + `/assets/${state.product.category}/${state.product.filename}.jpg`}
                    alt={state.product.category}
                />
                </Col>
                <Col className="info">
                    <h2>{state.product.name}</h2>
                    <br />
                    <br />
                    <h4>{state.product.category}</h4>
                    <br />
                    <p>{state.product.description}</p>
                    <Row className="buttonRow">
                    <Col style={{ textAlign: "right" }}>
                        <p>Price: ${state.product.price}</p>
                        {Auth.loggedIn() ? (
                        <a>
                        <Button id="buy" variant="primary" onClick={addToCart}>
                            Buy Now
                        </Button>
                        </a>
                        ) : (<></>)}
                    </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
    )
}