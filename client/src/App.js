import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StoreProvider } from "./utils/GlobalState";

//import pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import AppNavbar from './components/Navbar/NavbarB';
import Checkout from './pages/CheckOut/CheckOut';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <StoreProvider>
          <AppNavbar/>
          <Routes>
            <Route path='/'  exact element={<Home/>}/>
            <Route path='/:cat'  exact element={<Home/>}/>
            <Route path='/home'  exact element={<Home/>}/>
            <Route path='/login'  exact element={<Login/>}/>
            <Route path='/product'  exact element={<Product/>}/>
            <Route path='/sign-up'  exact element={<SignUp/>}/>
            <Route path='/cart'  exact element={<Cart/>}/>
            <Route path='/checkout'  exact element={<Checkout/>}/>
          </Routes>
          <Footer/>
          </StoreProvider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
