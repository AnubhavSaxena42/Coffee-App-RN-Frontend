import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

const RegisterUserScreen = () => {
  return (
    <View style={styles.registerUserScreenContainer}>
      <Text style={styles.headerTxt}>SIGN UP</Text>
      <Text style={styles.inputSubHeaderTxt}>What is your name?</Text>
      <TextInput cursorColor={'#EFE3C8'} style={styles.input} />
      <Text style={styles.inputSubHeaderTxt}>
        Please enter your phone number
      </Text>
      <TextInput cursorColor={'#EFE3C8'} style={styles.input} />
      <Text style={styles.inputSubHeaderTxt}>Please enter a password</Text>
      <TextInput cursorColor={'#EFE3C8'} style={styles.input} />
      <Text style={styles.inputSubHeaderTxt}>
        Please enter the password again
      </Text>
      <TextInput cursorColor={'#EFE3C8'} style={styles.input} />
      <Pressable style={styles.signUpBtn}>
        <Text style={styles.signUpBtnTxt}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default RegisterUserScreen;
