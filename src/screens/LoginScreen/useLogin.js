import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import client from '../../core/client';
import {STORAGE_KEYS} from '../../core/enums';
import {saveUserInfoToStorageAndState} from '../../core/helpers';
import {ROUTES} from '../../navigation/routes';
import {saveItemToStorage} from '../../services/storage-service';
import {CREATE_TOKEN} from './mutations';

export const useLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const navigation = useNavigation();

  const onSubmit = async () => {
    if (loginLoading) return;
    setLoginLoading(true);
    if (!phoneNumber || phoneNumber?.length < 10) {
      //toast
      setLoginLoading(false);
      return;
    }
    if (!password || password === '') {
      //toast
      setLoginLoading(false);
      return;
    }
    const loginResponse = await client?.mutate({
      mutation: CREATE_TOKEN,
      variables: {
        phoneNumber: phoneNumber,
        password: password,
      },
      fetchPolicy: 'no-cache',
    });
    console.log('Login Response:', loginResponse);
    if (loginResponse?.data?.errors) {
      //toast Invalid Credentials
      setLoginLoading(false);
      return;
    }
    //Store token and user in storage
    // await saveItemToStorage(
    //   STORAGE_KEYS.REFRESH_TOKEN,
    //   loginResponse?.data?.tokenAuth?.refreshToken,
    // );
    // await saveItemToStorage(
    //   STORAGE_KEYS.TOKEN,
    //   loginResponse?.data?.tokenAuth?.token,
    // );
    // await saveItemToStorage(
    //   STORAGE_KEYS.USER,
    //   JSON.stringify(loginResponse?.data?.tokenAuth?.user),
    // );
    await saveUserInfoToStorageAndState({
      token: loginResponse?.data?.tokenAuth?.token,
      refreshToken: loginResponse?.data?.tokenAuth?.refreshToken,
      user: loginResponse?.data?.tokenAuth?.user,
    });
    //Navigate to main stack
    navigation.replace(ROUTES.APP_VIEW);
    setLoginLoading(false);
  };

  return {
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    onSubmit,
    loginLoading,
  };
};
