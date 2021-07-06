import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const getApolloClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:8090/graphql',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            accounts: relayStylePagination()
          }
        }
      }
    }),
    connectToDevTools: true
  });
};

const init = () => {
  const client = getApolloClient();

  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

init();
