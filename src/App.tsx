import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import Routes from './routes';

import client from './services/ApolloConfig';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
    <GlobalStyle />
  </Router>
);

export default App;
