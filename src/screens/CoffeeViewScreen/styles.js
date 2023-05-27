import {Dimensions, StyleSheet} from 'react-native';
import {
  APP_BACKGROUND_COLOR,
  FONTS,
  SCREEN_HORIZONTAL_PADDING,
} from '../../core/constants';

export const styles = StyleSheet.create({
  coffeeViewScreen: {
    flex: 1,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    backgroundColor: APP_BACKGROUND_COLOR,
    paddingBottom: 20,
  },
  coffeeImage: {
    height: Dimensions.get('screen').height * 0.4,
    width: '100%',
    borderRadius: 40,
  },
  coffeeNameContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  coffeeNameTaglineContainer: {
    height: '100%',
    width: '50%',
    justifyContent: 'space-between',
  },
  coffeeNameTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    fontSize: 22,
    color: 'white',
  },
  taglineRatingContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  taglineTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    fontSize: 12,
    color: 'white',
  },
  ratingTxt: {fontFamily: FONTS.ROSARIVO_REGULAR, fontSize: 12, color: 'white'},
  descriptionContainer: {flex: 1, justifyContent: 'space-between'},
  descriptionScrollView: {paddingHorizontal: 5},
  descriptionTxt: {fontFamily: FONTS.ROSARIVO_REGULAR, color: 'white'},
  choiceOfMilkHeaderTxt: {fontSize: 14, color: 'white', paddingHorizontal: 5},
  choiceOfMilkScrollView: {
    marginVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  choiceOfMilk: {
    height: 35,
    minWidth: 90,
    marginRight: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFE3C8',
  },
  choiceOfMilkTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    fontSize: 12,
    color: '#201520',
  },
  priceBuyNowContainer: {
    paddingHorizontal: 5,
    width: '100%',
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceHeaderTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    color: 'white',
    fontSize: 14,
  },
  priceTxt: {color: 'white', fontSize: 20},
  buyNowBtn: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#EFE3C8',
  },
  buyNowTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    color: '#201520',
    fontSize: 14,
  },
});
