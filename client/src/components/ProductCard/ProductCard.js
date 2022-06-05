import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ProductCard.css'
import { Link } from 'react-router-dom';

import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY, UPDATE_PRODUCTS } from '../../utils/actions';

import Auth from '../../utils/auth';
import { idbPromise } from "../../utils/helpers";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function ProductCard({
    product: { id, title, categoryF, category , price, rating, description, img},
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [state, dispatch] = useStoreContext();

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: { id, title, categoryF, category , price, rating, description, img, purchaseQuantity: 1 }
    });
    idbPromise('cart', 'put', { id, title, categoryF, category , price, rating, description, img, purchaseQuantity: 1 });
  };

  const updateProduct = () => {
    dispatch({
      type: UPDATE_PRODUCTS,
      product: { id, title, categoryF, category , price, rating, description, img, purchaseQuantity: 1 }
    })
  }

  return (
    <Card className="root">
      <CardHeader
        action={
          <Typography
          className="action"
          variant='h5'
          color='textSecondary'
          >
              {price}$
          </Typography>
        }
        title={title}
        subheader={categoryF}
      />
      <Link className="modLink" to="/product" onClick={updateProduct}>
          View Details
      </Link>

      <CardMedia className="media"
        component="img"
        height="200"
        image={img}
        alt="Speaker"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {Auth.loggedIn() ? (
          <IconButton aria-label="view" onClick={addToCart}>
            <AddShoppingCartIcon />
          </IconButton>
        ) : (<></>)}
        
        {Array(rating)
        .fill()
        .map((_, i) => (
            <p>&#11088;</p>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
