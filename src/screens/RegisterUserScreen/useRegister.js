import {useState} from 'react';
import client from '../../core/client';
import {STORAGE_KEYS} from '../../core/enums';
import {saveItemToStorage} from '../../services/storage-service';
import {CREATE_TOKEN} from '../LoginScreen/mutations';
import {REGISTER_USER, UPDATE_ACCOUNT, USER_VERIFY} from './mutations';

export const useRegister = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const onSubmit = async () => {
    if (
      name === '' ||
      phoneNumber?.length < 10 ||
      password1 === '' ||
      password2 === ''
    ) {
      //toast
      return;
    }
    const registerResponse = await client?.mutate({
      mutation: REGISTER_USER,
      variables: {
        phoneNumber: phoneNumber,
        password1: password1,
        password2: password2,
      },
      fetchPolicy: 'no-cache',
    });
    console.log('Register response', registerResponse);
    if (!registerResponse?.data?.register?.success) {
      //find error message and toast
      console.log(
        Object.values(registerResponse?.data?.register?.errors)[0]?.[0]
          ?.message,
      );
      return;
    }
    const tokenResponse = await client?.mutate({
      mutation: CREATE_TOKEN,
      variables: {
        phoneNumber: phoneNumber,
        password: password1,
      },
      fetchPolicy: 'no-cache',
    });
    console.log('Log In Response:', tokenResponse);
    await saveItemToStorage(
      STORAGE_KEYS?.TOKEN,
      tokenResponse?.data?.tokenAuth?.token,
    );
    await saveItemToStorage(
      STORAGE_KEYS?.REFRESH_TOKEN,
      tokenResponse?.data?.tokenAuth?.refreshToken,
    );
    await saveItemToStorage(
      STORAGE_KEYS?.USER,
      JSON.stringify(tokenResponse?.data?.tokenAuth?.user),
    );
    const verifyResponse = await client.mutate({
      mutation: USER_VERIFY,
      variables: {
        userId: tokenResponse?.data?.tokenAuth?.user?.id,
      },
      fetchPolicy: 'no-cache',
    });
    console.log('Verify Response:', verifyResponse);

    const updateAccount = await client?.mutate({
      mutation: UPDATE_ACCOUNT,
      variables: {
        name: name,
      },
      fetchPolicy: 'no-cache',
    });
    console.log('Update Account Response:', updateAccount);
    //toast and navigate to store
  };

  return {
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    password1,
    setPassword1,
    onSubmit,
    password2,
    setPassword2,
  };
};
