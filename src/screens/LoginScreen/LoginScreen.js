import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ROUTES} from '../../navigation/routes';
import {useLogin} from './useLogin';
import {APP_BACKGROUND_COLOR} from '../../core/constants';

const LoginScreen = ({navigation}) => {
  const {
    phoneNumber,
    setPhoneNumber,
    setPassword,
    loginLoading,
    onSubmit,
    password,
  } = useLogin();

  return (
    <View style={styles.loginScreenContainer}>
      <Text style={styles.headerTxt}>LOG IN</Text>
      <Text style={styles.inputSubHeaderTxt}>
        Please enter your phone number
      </Text>
      <TextInput
        value={phoneNumber}
        onChangeText={text => {
          if (text?.length <= 10) setPhoneNumber(text);
        }}
        keyboardType={'number-pad'}
        cursorColor={'#EFE3C8'}
        style={styles.input}
      />
      <Text style={styles.inputSubHeaderTxt}>Please enter the password</Text>
      <TextInput
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        secureTextEntry={'true'}
        textContentType={'password'}
        cursorColor={'#EFE3C8'}
        style={styles.input}
      />
      <Text
        onPress={() => {
          navigation.navigate(ROUTES.REGISTER_USER_SCREEN);
        }}
        style={{
          ...styles.inputSubHeaderTxt,
          textDecorationLine: 'underline',
        }}>
        Haven't registered yet? Click here to register.
      </Text>
      <Pressable onPress={onSubmit} style={styles.signUpBtn}>
        {!loginLoading && <Text style={styles.signUpBtnTxt}>Continue</Text>}
        {loginLoading && (
          <ActivityIndicator size="small" color={APP_BACKGROUND_COLOR} />
        )}
      </Pressable>
    </View>
  );
};

export default LoginScreen;
