import {StyleSheet} from 'react-native';
import {
  APP_BACKGROUND_COLOR,
  FONTS,
  SCREEN_HORIZONTAL_PADDING,
} from '../../core/constants';

export const styles = StyleSheet.create({
  cartScreenContainer: {
    flex: 1,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    backgroundColor: APP_BACKGROUND_COLOR,
  },
  cartScreenHeaderTxt: {
    fontSize: 25,
    textAlign: 'center',
    color: '#EFE3C8',
    marginBottom: 15,
    fontFamily: FONTS.ROSARIVO_REGULAR,
  },
  cartItemsContainer: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  cartItem: {
    height: 100,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '2%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartItemImage: {width: 100, borderRadius: 12, height: '100%'},
  cartItemInfoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  cartItemInfoTxt: {
    fontSize: 12,
    fontFamily: FONTS.ROSARIVO_REGULAR,
    color: 'white',
  },
  cartItemQtyContainer: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemQty: {height: 30, width: '90%', flexDirection: 'row'},
  cartItemQtyBtn: {
    height: '100%',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFE3C8',
    borderRadius: 8,
  },
  cartItemQtyTxtContainer: {
    height: '100%',
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  cartItemQtyTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    fontSize: 12,
    color: 'white',
  },
  deliveryTaxesContainer: {
    height: 80,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  deliveryTaxesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveryTaxesTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    fontSize: 12,
    color: 'white',
  },
  totalContainer: {
    height: 100,
    width: '100%',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  totalRow: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '2%',
    alignItems: 'center',
  },
  totalTxt: {fontFamily: FONTS.ROSARIVO_REGULAR, fontSize: 20, color: 'white'},
  payNowBtn: {
    height: 48,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#EFE3C8',
  },
  payNowBtnTxt: {
    fontFamily: FONTS.ROSARIVO_REGULAR,
    color: '#4A2B29',
    fontSize: 16,
  },
  cartScreenScrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
