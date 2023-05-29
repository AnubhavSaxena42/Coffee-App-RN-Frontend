import {StyleSheet} from 'react-native';
import {
  APP_BACKGROUND_COLOR,
  FONTS,
  SCREEN_HORIZONTAL_PADDING,
} from '../../core/constants';

export const styles = StyleSheet.create({
  loginScreenContainer: {
    flex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 36,
    color: '#EFE3C8',
    fontFamily: FONTS.ROSARIVO_REGULAR,
    marginBottom: '10%',
  },
  inputSubHeaderTxt: {
    fontSize: 14,
    fontFamily: FONTS.ROSARIVO_REGULAR,
    color: '#EFE3C8',
    marginBottom: '5%',
  },
  input: {
    height: 40,
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#EFE3C8',
    color: '#EFE3C8',
    fontSize: 12,
    borderRadius: 10,
    marginBottom: '10%',
  },
  signUpBtn: {
    marginTop: '5%',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFE3C8',
    borderRadius: 10,
  },
  signUpBtnTxt: {
    fontSize: 16,
    fontFamily: FONTS.ROSARIVO_REGULAR,
    color: APP_BACKGROUND_COLOR,
  },
});
