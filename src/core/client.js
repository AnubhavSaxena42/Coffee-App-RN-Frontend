import {ApolloClient, InMemoryCache} from '@apollo/client';
const BASE_URL = 'http://127.0.0.1:8000/graphql';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
