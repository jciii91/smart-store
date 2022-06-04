import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Image, ListGroup, Row } from "react-bootstrap";

const Cart = () => {

    const cart = [
        {
            id: 1,
            name: 'Smart Speaker 2000',
            category: 'Smart Speakers & Displays',
            price: 8.99,
            rating: 3,
            qty: 10,
            inStock: 6,
            description: "This is an incredible speaker perfect to...",
            img: 'https://xiaomimx.vtexassets.com/arquivos/ids/156907/Mi-Smart-Speaker-4.png?v=637601637325130000',
        },
        {
            id: 2,
            name: 'LED RGBCW',
            category: 'Smart Lighting',
            price: 15,
            rating: 4,
            qty: 10,
            inStock: 5,
            description: "This is an incredible speaker perfect to...",
            img: 'https://m.media-amazon.com/images/I/61AqZPOI+2L._AC_SL1500_.jpg',
        },
        {
            id: 3,
            name: 'Smart Speaker 2000',
            category: 'Smart Speakers & Displays',
            price: 349.5,
            rating: 5,
            qty: 9,
            inStock: 10,
            description: "This is an incredible speaker perfect to...",
            img: 'https://media.takealot.com/covers_images/4e0f9bfa06ed49079879f1bccb2d6b0b/s-zoom.file',
        }     
    ];


  return (
      <>
      <Container className='shopTitle'>
          <h1>Shopping cart</h1>
      </Container>
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image className='cartImg' src={prod.img} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}> {prod.price} $</Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                  >
                      <i class="fas fa-trash-alt" fontSize="20px"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {487.5} $</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
      </>
  );
};

export default Cart;