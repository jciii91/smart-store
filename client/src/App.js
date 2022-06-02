import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

//import pages
import Home from './pages/Home/Home';
import CheckOut from './pages/CheckOut/CheckOut';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Search from './pages/Search/Search';
import SignUp from './pages/SignUp/SignUp';

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
          <Navbar/>
          <Routes>
            <Route path='/'  exact element={<Home/>}/>
            <Route path='/check-out' exact element={<CheckOut/>}/>
            <Route path='/login'  exact element={<Login/>}/>
            <Route path='/products'  exact element={<Products/>}/>
            <Route path='/search'  exact element={<Search/>}/>
            <Route path='/sign-up'  exact element={<SignUp/>}/>
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
