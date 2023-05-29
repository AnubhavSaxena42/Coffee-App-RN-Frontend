import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import client from '../../core/client';
import {saveUserInfoToStorageAndState} from '../../core/helpers';
import {ROUTES} from '../../navigation/routes';
import {CREATE_TOKEN} from '../LoginScreen/mutations';
import {REGISTER_USER, UPDATE_ACCOUNT, USER_VERIFY} from './mutations';

export const useRegister = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [registerLoading, setRegisterLoading] = useState(false);
  const navigation = useNavigation();

  const onSubmit = async () => {
    if (registerLoading) return;
    setRegisterLoading(true);
    if (
      name === '' ||
      phoneNumber?.length < 10 ||
      password1 === '' ||
      password2 === ''
    ) {
      //toast
      setRegisterLoading(false);
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
      setRegisterLoading(false);
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

    const verifyResponse = await client.mutate({
      mutation: USER_VERIFY,
      variables: {
        userId: tokenResponse?.data?.tokenAuth?.user?.id,
      },
      fetchPolicy: 'no-cache',
    });
    console.log('Verify Response:', verifyResponse);
    await saveUserInfoToStorageAndState({
      token: tokenResponse?.data?.tokenAuth?.token,
      refreshToken: tokenResponse?.data?.tokenAuth?.refreshToken,
      user: tokenResponse?.data?.tokenAuth?.user,
    });

    const updateAccount = await client?.mutate({
      mutation: UPDATE_ACCOUNT,
      variables: {
        name: name,
      },
      fetchPolicy: 'no-cache',
    });
    console.log('Update Account Response:', updateAccount);
    // await saveItemToStorage(
    //     STORAGE_KEYS?.TOKEN,
    //     tokenResponse?.data?.tokenAuth?.token,
    //   );
    //   await saveItemToStorage(
    //     STORAGE_KEYS?.REFRESH_TOKEN,
    //     tokenResponse?.data?.tokenAuth?.refreshToken,
    //   );
    //   await saveItemToStorage(
    //     STORAGE_KEYS?.USER,
    //     JSON.stringify(tokenResponse?.data?.tokenAuth?.user),
    //   );

    //toast and navigate to store
    navigation.replace(ROUTES.APP_VIEW);
    setRegisterLoading(false);
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
    registerLoading,
    setPassword2,
  };
};
