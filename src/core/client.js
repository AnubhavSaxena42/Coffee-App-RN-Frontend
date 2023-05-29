import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {REFRESH_TOKEN, VERIFY_TOKEN} from '../gql/mutations';
import {
  getItemFromStorage,
  saveItemToStorage,
} from '../services/storage-service';
import {STORAGE_KEYS} from './enums';
import {saveUserInfoToStorageAndState} from './helpers';

const BASE_URL = 'http://127.0.0.1:8000/graphql';
const httpLink = createHttpLink({
  uri: BASE_URL,
});

const verifyAndRefreshToken = async ({token, refreshToken}) => {
  console.log('In verify function');
  const verifyClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  console.log('before verify:', verifyClient, httpLink, token);

  const verifyResponse = await verifyClient.mutate({
    mutation: VERIFY_TOKEN,
    variables: {
      token: token,
    },
    fetchPolicy: 'no-cache',
  });
  console.log('verify response ,', verifyResponse);
  if (verifyResponse?.data?.verifyToken?.success) {
    console.log('Verify function verified');
    return {token, refreshToken};
  }

  const refreshResponse = await verifyClient.mutate({
    mutation: REFRESH_TOKEN,
    variables: {
      refreshToken: refreshToken,
    },
    fetchPolicy: 'no-cache',
  });
  console.log('Verify function refresh', refreshResponse, refreshToken, token);
  //   await saveItemToStorage(
  //     STORAGE_KEYS.REFRESH_TOKEN,
  //     refreshResponse?.data?.refreshToken?.refreshToken,
  //   );
  //   await saveItemToStorage(
  //     STORAGE_KEYS.TOKEN,
  //     refreshResponse?.data?.refreshToken?.token,
  //   );
  await saveUserInfoToStorageAndState({
    token: refreshResponse?.data?.refreshToken?.token,
    refreshToken: refreshResponse?.data?.refreshToken?.refreshToken,
    user: null,
  });
  return {
    token: refreshResponse?.data?.refreshToken?.token,
    refreshToken: refreshResponse?.data?.refreshToken?.refreshToken,
  };
};

const getAccessToken = async () => {
  const localtoken = await getItemFromStorage(STORAGE_KEYS.TOKEN);
  const refreshToken = await getItemFromStorage(STORAGE_KEYS.REFRESH_TOKEN);

  if (localtoken && refreshToken) {
    const {token} = await verifyAndRefreshToken({
      token: localtoken,
      refreshToken: refreshToken,
    });
    return token;
  }
  return localtoken;
};

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
  cache: new InMemoryCache(),
});

export default client;
