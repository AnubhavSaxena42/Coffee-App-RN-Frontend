import {View, Text, Pressable, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ROUTES} from '../../navigation/routes';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.loginScreenContainer}>
      <Text style={styles.headerTxt}>LOG IN</Text>
      <Text style={styles.inputSubHeaderTxt}>
        Please enter your phone number
      </Text>
      <TextInput cursorColor={'#EFE3C8'} style={styles.input} />
      <Text style={styles.inputSubHeaderTxt}>Please enter the password</Text>
      <TextInput cursorColor={'#EFE3C8'} style={styles.input} />
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
      <Pressable style={styles.signUpBtn}>
        <Text style={styles.signUpBtnTxt}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
