import { ApolloClient, InMemoryCache } from '@apollo/client';

const api = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/',
  cache: new InMemoryCache(),
});

export default api;
