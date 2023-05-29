import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useRegister} from './useRegister';

const RegisterUserScreen = () => {
  const {
    name,
    setName,
    password1,
    setPassword1,
    password2,
    setPassword2,
    phoneNumber,
    onSubmit,
    setPhoneNumber,
  } = useRegister();

  return (
    <View style={styles.registerUserScreenContainer}>
      <Text style={styles.headerTxt}>SIGN UP</Text>
      <Text style={styles.inputSubHeaderTxt}>What is your name?</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        cursorColor={'#EFE3C8'}
        style={styles.input}
      />
      <Text style={styles.inputSubHeaderTxt}>
        Please enter your phone number
      </Text>
      <TextInput
        value={phoneNumber}
        onChangeText={text => {
          if (text?.length <= 10) setPhoneNumber(text);
        }}
        keyboardType="number-pad"
        cursorColor={'#EFE3C8'}
        style={styles.input}
      />
      <Text style={styles.inputSubHeaderTxt}>Please enter a password</Text>
      <TextInput
        value={password1}
        onChangeText={text => {
          setPassword1(text);
        }}
        secureTextEntry={true}
        cursorColor={'#EFE3C8'}
        style={styles.input}
      />
      <Text style={styles.inputSubHeaderTxt}>
        Please enter the password again
      </Text>
      <TextInput
        value={password2}
        onChangeText={text => {
          setPassword2(text);
        }}
        secureTextEntry={true}
        cursorColor={'#EFE3C8'}
        style={styles.input}
      />
      <Pressable onPress={onSubmit} style={styles.signUpBtn}>
        <Text style={styles.signUpBtnTxt}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default RegisterUserScreen;
