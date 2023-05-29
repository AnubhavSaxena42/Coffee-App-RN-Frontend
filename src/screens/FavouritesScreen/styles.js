import {StyleSheet} from 'react-native';
import {
  APP_BACKGROUND_COLOR,
  FONTS,
  SCREEN_HORIZONTAL_PADDING,
} from '../../core/constants';

export const styles = StyleSheet.create({
  favouritesScreenContainer: {
    flex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
  favouritesScreenHeaderTxt: {
    fontSize: 25,
    textAlign: 'center',
    color: '#EFE3C8',
    marginBottom: 15,
    fontFamily: FONTS.ROSARIVO_REGULAR,
  },
});
