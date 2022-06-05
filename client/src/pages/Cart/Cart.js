import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
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

  function countItems() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.purchaseQuantity;
    });
    return sum;
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function updateCartQuantity(operation, product) {
    if (operation === 'plus') {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: parseInt(product.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', { ...product, purchaseQuantity: parseInt(product.purchaseQuantity) + 1 });
    } else if (operation === 'minus' && parseInt(product.purchaseQuantity) > 1) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: product._id,
        purchaseQuantity: parseInt(product.purchaseQuantity) - 1
      });
      idbPromise('cart', 'put', { ...product, purchaseQuantity: parseInt(product.purchaseQuantity) - 1 });
    } else {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: product._id,
      });
      idbPromise('cart', 'delete', { ...product });
    }
  }

  function removeCartItem(product) {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: product._id,
    });
    idbPromise('cart', 'delete', { ...product });
  }

  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/checkout`;
    navigate(path);
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
            <ListGroup.Item key={prod._id}>
              <Row>
                <Col md={2}>
                  <Image className='cartImg' src={`assets/${prod.category}/${prod.filename}.jpg`} alt={prod.category} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}> {prod.price} $</Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => updateCartQuantity('minus',prod)}>
                      <i className='fas fa-minus'></i>
                  </Button>
                  <span>  {prod.purchaseQuantity}   </span>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => updateCartQuantity('plus',prod)}>
                      <i className='fas fa-plus'></i>
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() => removeCartItem(prod)}
                  >
                    <i className="fas fa-trash-alt" fontSize="20px"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <p className="title">Subtotal ({countItems()}) items</p>
        <p style={{ fontWeight: 700, fontSize: 20 }}>Total: ${calculateTotal()}</p>
        <Button type="button" disabled={cart.length === 0} onClick={routeChange}>
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
