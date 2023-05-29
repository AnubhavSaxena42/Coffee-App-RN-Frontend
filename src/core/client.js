import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {getItemFromStorage} from '../services/storage-service';
import {STORAGE_KEYS} from './enums';
const BASE_URL = 'http://127.0.0.1:8000/graphql';

const getAccessToken = async () => {
  const localtoken = await getItemFromStorage(STORAGE_KEYS.TOKEN);
  return localtoken;
};

const httpLink = createHttpLink({
  uri: BASE_URL,
});

const authLink = setContext(async (_, {headers}) => {
  console.log('In Authlink function');
  const token = await getAccessToken();

  // return the headers to the context so httpLink can read them

  let Headers = {
    ...headers,
  };

  if (token) {
    Headers.Authorization = `JWT ${token}`;
  }

  console.log('HEADERS:', JSON.stringify(Headers));
  return {
    headers: Headers,
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  //   uri: BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
