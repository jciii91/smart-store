import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Image, ListGroup, Row } from "react-bootstrap";
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    };
  
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  const cart = state.cart;

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  return (
      <>
      <Container className='shopTitle'>
          <h1>Shopping cart</h1>
      </Container>

      {state.cart.length ? (
      <>
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
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ${calculateTotal}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
      </>
      ) : (
        <div className="productContainer">
          <h3>
            <span role="img" aria-label="shocked">
              😱
            </span>
            You haven't added anything to your cart yet!
          </h3>
        </div>
      )}
      </>
  );
};

export default Cart;
