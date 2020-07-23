import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

export default api;
