import {useState} from 'react';
import client from '../../core/client';
import {CREATE_TOKEN} from './mutations';

export const useLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    if (!phoneNumber || phoneNumber?.length < 10) {
      //toast
      return;
    }
    if (!password || password === '') {
      //toast
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
      return;
    }
    //Store token and user in storage
    //Navigate to main stack
  };

  return {
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    onSubmit,
  };
};
